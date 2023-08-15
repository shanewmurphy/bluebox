import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ContainerSizes from "@/components/Containers";
import Security from "@/components/Security";
import PickUpService from "@/components/Pick-Up-Service";
import Contact from "@/components/Contact";
import FAQCommon from "@/components/FAQ/Common";
import Testimonials from "@/components/Testimonials/Testimonials";

import Layout from "@/components/Layout";
export default function Home() {
  return (
    <Layout>
      <div>
        <div>
          <Hero />
        </div>
        <div>
          <Intro />
        </div>
        <div>
          <ContainerSizes />
        </div>
        <div>
          <Security />
        </div>
        <div>
          <PickUpService />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <FAQCommon />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </Layout>
  );
}
