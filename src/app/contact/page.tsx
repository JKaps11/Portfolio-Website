export const dynamic   = 'force-dynamic';
export const revalidate = 0;

import { ContactAlert } from "@/components/client/ClientAlert";
import { sendEmailToSelf, ContactFormPayload } from "@/lib/email/sendEmailToYourself";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

type StatusType = "success" | "error";

interface ContactPageProps {
  searchParams?: { status?: string };
}

const schema = z.object({
  firstName: z.string().min(1),
  lastName:  z.string().min(1),
  subject:   z.string().min(1),
  message:   z.string().min(1),
});

async function onSubmitForm(formData: FormData): Promise<void> {
  "use server";
  const data: Partial<ContactFormPayload> = {
    firstName: formData.get("firstName") as string,
    lastName:  formData.get("lastName")  as string,
    subject:   formData.get("subject")   as string,
    message:   formData.get("message")   as string,
  };

  // validation
  if (!schema.safeParse(data).success) {
    return redirect("/contact?status=error");
  }

  try {
    await sendEmailToSelf(data as ContactFormPayload);
    // revalidate the actual `/contact` route
    await revalidatePath("/contact");
    return redirect("/contact?status=success");
  } catch {
    return redirect("/contact?status=error");
  }
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const rawStatus = searchParams?.status;
  const status: StatusType | undefined =
    rawStatus === "success" || rawStatus === "error" ? rawStatus : undefined;

  return (
    <div className="flex flex-col items-center justify-start w-full h-full py-10 px-4 sm:px-8">
      <ContactAlert status={status} />

      <form
        action={onSubmitForm}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-black text-center">Can't wait to hear from you!</h2>

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
