import Head from "next/head";
import DesktopNav from "./Nav/Desktop-Nav";
import MobileNav from "./Nav/Mobile-Nav";
import Footer from "./Footer";
export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <div className="lg:block md:block sm:hidden">
          <DesktopNav />
        </div>
        <div className="lg:hidden md:hidden sm:block">
          <MobileNav />
        </div>

        {children}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
Layout.defaultProps = {
  title: "Blue Box Storage Containers | Cork, Ireland",
  description: "Blue Box Shipping Storage Containers, Cork, ireland",
};
