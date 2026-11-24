import ClientLayout from "./client.layout";
import "./globals.css";

export const metadata = {
  title: "Trackflow | Smarter Rail Operations",
  description:
    "A smarter way to approach railway operations. We turn complex processes into simple, efficient and practical solutions.",
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
