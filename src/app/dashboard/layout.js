import "@/style/globals.css";

export const metadata = {
  title: "Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>;
    </html>
  );
}
