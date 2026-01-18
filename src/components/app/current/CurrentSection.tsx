import { Separator } from "@/components/ui/separator";
import { CurrentItems } from "./CurrentItems";
import CurrentCard from "./CurrentCard";

export default function CurrentSection() {
  return (
    <section
      id="current"
      className="flex flex-col w-full h-full gap-4"
    >
      <h2>Current</h2>
      <Separator decorative />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {CurrentItems.map((item) => (
          <CurrentCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
