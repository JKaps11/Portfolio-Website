import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import { MainLayout } from "@/components/app/MainLayout";

const COLOR_PRIMARY = '#b22222';
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full w-full`}
      >
        <ConfigProvider theme={{
          token: {
            colorPrimary: COLOR_PRIMARY,
            colorText: COLOR_WHITE,
            colorTextHeading: COLOR_WHITE,
            colorBgLayout: 'transparent',
            colorBgContainer: 'transparent',
            colorLink: COLOR_WHITE,
          },
          components: {
            Spin: {
              colorPrimary: COLOR_WHITE,
              colorPrimaryActive: COLOR_WHITE,
              colorPrimaryHover: COLOR_WHITE,
            },
            Layout: {
              headerColor: COLOR_WHITE,
              headerBg: 'transparent',
              footerBg: 'transparent',
              footerPadding:'1rem'
            },
            Card: {
              colorText: COLOR_DARK,
              colorBgContainer: COLOR_WHITE,
              colorBgSolidHover: COLOR_PRIMARY,
            },
            Segmented: {
              itemColor: COLOR_PRIMARY,
              itemSelectedBg: COLOR_PRIMARY,
              itemSelectedColor: COLOR_WHITE,
              itemHoverBg: COLOR_DARK,
              itemHoverColor: COLOR_WHITE,
              trackBg: COLOR_WHITE,
            },
          }
        }}>
          <AntdRegistry>
            <MainLayout>{children}</MainLayout>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
