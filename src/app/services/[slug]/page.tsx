import { services } from "@/lib/servicesData";
import { notFound } from "next/navigation";
import ServiceLayout from "@/components/ServiceLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ServiceLayout service={service} />
      </main>
      <Footer />
    </>
  );
}
