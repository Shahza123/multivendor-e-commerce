import { Inter } from "next/font/google";
// import { ThemeProvider } from "next-themes";
import "../styles/main.scss";
import Providers from "@/context/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
