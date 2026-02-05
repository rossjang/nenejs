import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/i18n";

export default function DocsPage() {
  redirect(`/docs/${DEFAULT_LOCALE}`);
}
