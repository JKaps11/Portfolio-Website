import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarSelector from "@/components/app/NavBar";
import { FadeIn } from "@/components/client/FadeIn";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

const COLOR_WHITE = '#ffffff';
const COLOR_DARK = '#470D0D';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen text-white`}
        style={{ background: "var(--homepage-gradient)" }}
      >
        <header className="w-full">
          <NavBarSelector />
        </header>

        <main className="flex-grow">
           <ConfigProvider theme={{
          token: {
            colorText: COLOR_WHITE,
            colorTextHeading: COLOR_WHITE,
            colorBgLayout: 'transparent',
            colorBgContainer: 'transparent',
            colorLink: 'black'
          },
          components: {
            Spin: {
              colorPrimary: COLOR_WHITE,
              colorPrimaryActive: COLOR_WHITE,
              colorPrimaryHover: COLOR_WHITE,
            },
            Segmented: {
              itemColor: COLOR_DARK,
              itemSelectedBg: COLOR_DARK,
              itemSelectedColor: COLOR_WHITE,
              itemHoverBg: '#6a1a1a',
              itemHoverColor: COLOR_WHITE,
              trackBg: COLOR_WHITE,
            },
          }
        }}>
          <AntdRegistry>
            <FadeIn>{children}</FadeIn>
          </AntdRegistry>
        </ConfigProvider>
        </main>

        <footer className="w-full text-center">
          <span>© 2025 Joshua Kaplan. Code licensed under MIT.</span>
        </footer>
      </body>
    </html>
  );
}
