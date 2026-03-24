import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Schedule a Demo | Founding Legals",
  description: "Get a personalized walkthrough of the Founding Legals platform and see how we can help your startup scale with confidence.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}
