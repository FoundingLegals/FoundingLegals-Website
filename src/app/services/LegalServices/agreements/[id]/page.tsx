import AgreementDetailPage, { generateStaticParams as getParams } from "../../../agreements/[id]/page";

export function generateStaticParams() {
  return getParams();
}

export default AgreementDetailPage;
