import { PageLayout } from "@/components/common/PageLayout";
import { ReactNode } from "react";

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}