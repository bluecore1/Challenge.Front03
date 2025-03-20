import Layout from "@/components/layout";
import "../app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
