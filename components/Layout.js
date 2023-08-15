import Head from "next/head";
import DesktopNav from "./Nav/Desktop-Nav";
export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <div>
          <DesktopNav />
        </div>
        {children}
      </div>
    </div>
  );
}
Layout.defaultProps = {
  title: "Blue Box Storage Conatiners | Cork, Ireland",
  description: "Blue Box Shipping Storage Containers, Cork, ireland",
};
