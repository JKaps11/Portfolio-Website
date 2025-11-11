import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio Website",
    description: "Portfolio Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full w-full">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="Content-Language" content="en" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className={"antialiased flex flex-col min-h-screen"}>
                <Analytics />
                <main className="grow">{children}</main>
                <footer className="w-full text-center">
                    <span>© 2025 Joshua Kaplan. Code licensed under MIT.</span>
                </footer>
            </body>
        </html>
    );
}
