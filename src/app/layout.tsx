import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artzie | Gambar yang terasa personal",
  description: "Jasa sketch pencil, pen, dan lukis custom dari Artzie.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
