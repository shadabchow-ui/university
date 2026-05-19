import { CartProvider } from "components/cart/cart-context";
import { UniversityFooter } from "components/university/UniversityFooter";
import { UniversityHeader } from "components/university/UniversityHeader";
import { GeistSans } from "geist/font/sans";
import { getUniversityMarketplaceData } from "lib/university/categories";
import { getCart } from "lib/shopify";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { baseUrl } from "lib/utils";

const { SITE_NAME } = process.env;
const universitySiteName = SITE_NAME || "Upcube University";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: universitySiteName,
    template: `%s | ${universitySiteName}`,
  },
  description:
    "Upcube University is a dark marketplace shell for browsing courses, skills, and learning tracks.",
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();
  const marketplace = await getUniversityMarketplaceData();

  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body className="min-h-screen bg-[#050505] text-neutral-100 selection:bg-teal-400 selection:text-black">
        <CartProvider cartPromise={cart}>
          <UniversityHeader marketplace={marketplace} />
          <main className="min-h-[calc(100vh-10rem)] bg-[radial-gradient(circle_at_top,_rgba(35,35,35,0.55),_transparent_45%),linear-gradient(180deg,_#090909_0%,_#050505_48%,_#030303_100%)]">
            {children}
            <Toaster closeButton />
          </main>
          <UniversityFooter marketplace={marketplace} />
        </CartProvider>
      </body>
    </html>
  );
}
