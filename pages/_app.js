import "../styles/globals.css";

import { Inter } from "@next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />;
    </main>
  );
}

export default MyApp;
