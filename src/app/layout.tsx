import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio Website",
    description: "Portfolio Website",
    viewport: "width=device-width, initial-scale=1",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full w-full">
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
