import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
    title: "Darling Electric | Brooksville Electrician",
    description: "Serving Brooksville and Hernando County since 2001. Safe, reliable electrical service.",
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
