import { PageLayout } from "@/components/common/PageLayout";
import { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}