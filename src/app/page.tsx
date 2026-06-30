import { Navbar } from "@/components/layout/Navbar";
import { WorkGallery } from "@/components/gallery/WorkGallery";
import { Capabilities } from "@/components/sections/Capabilities";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Journal } from "@/components/sections/Journal";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { getProjects } from "@/lib/portfolio";

export default function Home() {
  const projects = getProjects();

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero projects={projects} />
        <WorkGallery />
        <Stats />
        <Capabilities />
        <Journal />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
