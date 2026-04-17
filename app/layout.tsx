import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gymshark Phone Box — NYC & Miami Activation Proposal | Agora Graphics",
  description: "Fabrication and production proposal for the Gymshark Phone Box experiential activation — New York and Miami, July 2026. Custom pink phone box fabrication, photo activation, interactive tech, and multi-city deployment by Agora Graphics in partnership with Ominto Studio.",
  keywords: "Gymshark, Phone Box, experiential activation, New York, Miami, Astor Place, Wynwood, Lincoln Road, Brickell, scenic fabrication, Agora Graphics, Ominto Studio",
  openGraph: {
    title: "Gymshark Phone Box — NYC & Miami Activation Proposal",
    description: "Fabrication & Production Proposal by Agora Graphics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
