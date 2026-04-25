import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Sankeerth Anchuru | Software Engineer & Cloud Developer",
  description: "Portfolio of Sai Sankeerth Anchuru — Software Engineer specializing in Backend Development, Cloud Infrastructure, and DevOps. Hyderabad, India.",
  keywords: ["Software Engineer", "Backend Developer", "AWS", "DevOps", "Spring Boot", "React", "Hyderabad"],
  openGraph: {
    title: "Sai Sankeerth Anchuru | Software Engineer",
    description: "Building scalable systems and high-performance enterprise applications.",
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
      <body>
        {children}
      </body>
    </html>
  );
}
