import { Inter } from "next/font/google";
import "../style/globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Maker",
  description: "Event Maker by Elysium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
