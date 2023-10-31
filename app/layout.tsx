import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSR BLOG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-full`}>
        <div className="justify-center w-full h-full m-auto">
          <header className="bg-blue-500 h-16">
            <div className="container w-full h-full p-2 m-auto">
              <div className="flex flex-row gap-3 h-full">
                <p className="font-bold text-white my-auto">{"SSR BLOG: "}</p>
                <p className="text-white my-auto">
                  {"a study case with Next.js"}
                </p>
              </div>
            </div>
          </header>
          <div className="container m-auto p-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
