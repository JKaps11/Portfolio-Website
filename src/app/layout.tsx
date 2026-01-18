import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/common/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio Website",
    description: "Portfolio Website",
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
        <html lang="en" className="h-full w-full" suppressHydrationWarning>
            <body className={"antialiased flex flex-col min-h-screen"}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Analytics />
                    <main className="grow">{children}</main>
                    <footer className="w-full text-center my-4 text-sm text-muted-foreground">
                        <span>© 2025 Joshua Kaplan. Code licensed under MIT.</span>
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
