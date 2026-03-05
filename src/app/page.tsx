import { About } from "@/components/landing-page/About";
import { ContactSection } from "@/components/landing-page/ContactSection";
import { Footer } from "@/components/landing-page/Footer";
import { Header } from "@/components/landing-page/Header";
import { Hero } from "@/components/landing-page/Hero";
import { Services } from "@/components/landing-page/Services";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
