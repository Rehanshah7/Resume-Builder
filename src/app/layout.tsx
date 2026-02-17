import type { Metadata } from "next";
import "./globals.css";
import { ResumeProvider } from "@/context/ResumeContext";

export const metadata: Metadata = {
  title: "Personal Resume Builder",
  description: "A personal resume builder with live preview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <ResumeProvider>{children}</ResumeProvider>
      </body>
    </html>
  );
}
