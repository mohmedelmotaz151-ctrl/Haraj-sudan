import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "حراج السودان",
  description: "سوق السودان للإعلانات المبوبة والبيع والشراء",
  applicationName: "حراج السودان",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
