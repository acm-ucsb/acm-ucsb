import Navbar from "../components/shared/Navbar/Navbar";
import Hero from "../components/landing/Hero";
import AboutBlurb from "../components/landing/body/AboutBlurb";
import Branches from "../components/landing/body/BranchSection/Branches";
import EventsSection from "../components/landing/body/EventsSection/EventsSection";
import Footer from "../components/shared/Footer/Footer";
import FAQ from "@/components/landing/body/FAQ";
import Banner from "../components/shared/Banner";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <Banner
          inputText="Apply to be an ACM Intern Here!"
          inputLink="/interns"
        />
        <Hero />
        <AboutBlurb />
        <Branches />
        <EventsSection />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
