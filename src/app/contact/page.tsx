export const dynamic = 'force-dynamic'; // disables next caching
export const revalidate = 0;            // disables caching for endpoint

import { ContactAlert } from "@/components/client/ClientAlert";
import { sendEmailToSelf } from "@/lib/email/sendEmailToYourself";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

// Zod validation schema
const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  subject: z.string().min(1),
  message: z.string().min(1),
});

// Server action
async function onSubmitForm(formData: FormData): Promise<void> {
  "use server";

  const parsed = schema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return redirect("/contact?status=error");
  }

  await sendEmailToSelf(parsed.data);
  revalidatePath("/contact");
  redirect("/contact?status=success");
}

export default async function ContactPage({ searchParams }: { searchParams?: Promise<{ status?: string }> }) {
  
  const resolvedParams = await searchParams;
  const rawStatus = resolvedParams?.status;
  const status = rawStatus === "success" || rawStatus === "error" ? rawStatus : undefined;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-8">
      <ContactAlert status={status} />

      <form
        action={onSubmitForm}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >
        <h3 className="text-center text-3xl font-bold text-neutral-900 mb-6">
          Can't wait to hear from you!
        </h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-800 mb-1">First Name</label>
            <input
              name="firstName"
              placeholder="First Name"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-800 mb-1">Last Name</label>
            <input
              name="lastName"
              placeholder="Last Name"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Subject</label>
          <input
            name="subject"
            placeholder="Subject"
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Your message..."
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition text-white font-bold py-2 px-6 rounded-lg shadow-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
