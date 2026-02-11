import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
    title: "Darling Electric | Website Update",
    description: "Watch your 60-second website update now. Click to view the interactive preview.",
    openGraph: {
        title: "Darling Electric - Website Update",
        description: "Watch your 60-second website update now. Click to view the interactive preview.",
        type: "website",
        url: "https://darling-electric.vercel.app/quick-video",
        images: [
            {
                url: "/preview.png",
                width: 1200,
                height: 630,
                alt: "Darling Electric Website Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Darling Electric - Website Update",
        description: "Watch your 60-second website update now.",
        images: ["/preview.png"],
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} font-sans`}>
                {children}
            </body>
        </html>
    );
}
