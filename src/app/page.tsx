import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import WhyNow from "@/components/WhyNow";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Providers>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Technology />
        <WhyNow />
        <CTA />
      </main>
      <Footer />
    </Providers>
  );
}
