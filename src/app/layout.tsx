import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrackWise | Verified Internship Lifecycle",
  description: "A trust-first internship verification workspace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
