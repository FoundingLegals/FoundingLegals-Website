import ServiceSlugPage, { generateStaticParams as getParams } from "../../[slug]/page";

export function generateStaticParams() {
  return getParams();
}

export default ServiceSlugPage;
