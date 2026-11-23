import ClientLayout from "./client.layout";
import "./globals.css";

export const metadata = {
  title: "JA logistics",
  description: "A page about John Allens timesaver, with LEGO trains",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
