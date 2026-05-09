import Header          from "@/components/Header";
import Hero            from "@/components/Hero";
import Services        from "@/components/Services";
import Portfolio       from "@/components/Portfolio";
import WhyUs           from "@/components/WhyUs";
import CtaWhatsapp     from "@/components/CtaWhatsapp";
import Footer          from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyUs />
        <CtaWhatsapp />
      </main>
      <Footer />
    </>
  );
}
