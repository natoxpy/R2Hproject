import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { DoubleHeader } from "@/header/component";
import { FooterSimple } from "../footer/component";
import { Notifications } from "@mantine/notifications";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R2H web project",
  description: "R2H Web project",
};

const theme = createTheme({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Notifications />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <div
              style={{
                marginTop: "2rem",
                flexGrow: "1",
              }}
            >
              <DoubleHeader />
            </div>
            <div
              style={{
                marginTop: "2rem",
                flexGrow: "5000",
              }}
            >
              {children}
            </div>
            <div
              style={{
                marginTop: "2rem",
                flexGrow: "1",
              }}
            >
              <FooterSimple />
            </div>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
