import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ramen Season",
  description: "check out which ramen is eaten during each season.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid place-content-center bg-semiblack`}
      >
        <svg className="pointer-events-none absolute cursor-none">
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency={0.5} />
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
