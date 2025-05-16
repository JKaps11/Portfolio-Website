import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import { MainLayout } from "@/components/app/MainLayout";

const COLOR_PRIMARY = '#b22222';
const COLOR_WHITE = '#ffffff';
const COLOR_BLACK = '#000000';
const COLOR_HEADER_BG = '#8B0000';

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
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full h-full`}
      >
        <ConfigProvider theme={{
          token: {
            colorPrimary: COLOR_PRIMARY,
            colorBgBase: COLOR_WHITE,
            colorText: COLOR_BLACK,
            colorTextHeading: COLOR_BLACK,
            colorBgLayout: COLOR_WHITE,
            colorLink: COLOR_WHITE
          },
          components: {
            Spin: {
              colorPrimary: COLOR_PRIMARY,
              colorPrimaryActive: COLOR_PRIMARY,
              colorPrimaryHover: COLOR_PRIMARY,
              colorPrimaryTextActive: COLOR_BLACK,
              colorPrimaryTextHover: COLOR_BLACK,
            },
            Layout: {
              headerColor: COLOR_WHITE,
              headerBg: COLOR_HEADER_BG,
              footerBg: COLOR_BLACK,
              footerPadding: '24px'
            },
            Typography: {
              colorTextHeading: 'inherit',
              titleMarginBottom: '18px',
              titleMarginTop: 0
            },
            Card: {
              colorText: COLOR_BLACK,
              colorBgContainer: COLOR_WHITE,
              colorBgSolidHover: COLOR_PRIMARY,
            },
            Carousel: {
              colorBgContainer: COLOR_PRIMARY,
              dotHeight: 8,
              dotWidth: 8,
              dotActiveWidth: 8,
            }
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
