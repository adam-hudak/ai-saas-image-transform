import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI SaaS Image Transformation",
  description: "Use AI to transform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#23a7cf",
        },
      }}
    >
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
