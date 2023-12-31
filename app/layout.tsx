import type { Metadata } from "next";
import { CookiesProvider } from "next-client-cookies/server";
import { sfProDisplay } from "./ui/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Live Chat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookiesProvider>
      <html lang="en">
        <body
          className={`${sfProDisplay.className} min-w-min bg-lightGray antialiased selection:bg-lightBlue/30 selection:text-lightBlue`}
        >
          {children}
        </body>
      </html>
    </CookiesProvider>
  );
}
