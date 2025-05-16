import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import { MainLayout } from "@/components/app/MainLayout";

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
            colorPrimary: '#b22222',
            colorBgBase: '#ffffff',
            colorText:'#000000',
            colorTextHeading: '#000000',
            colorBgLayout: '#ffffff',
            colorLink:'#ffffff'
          },
          components: {
            Spin: {
              colorPrimary: '#b22222',
              colorPrimaryActive: '#b22222',
              colorPrimaryHover: '#b22222',
              colorPrimaryTextActive: '#000000',
              colorPrimaryTextHover: '#000000',
            },
            Layout: {
              headerColor: '#ffffff',
              headerBg: '#8B0000',
              footerBg: '#000000',
              footerPadding: '24px'
            },
            Typography: {
              colorTextHeading: 'inherit',
              titleMarginBottom: 0,
              titleMarginTop: 0
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
