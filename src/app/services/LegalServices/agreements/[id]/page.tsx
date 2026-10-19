import AgreementDetailPage, {
  generateStaticParams as getParams,
  generateMetadata,
} from "../../../agreements/[id]/page";

export function generateStaticParams() {
  return getParams();
}

export { generateMetadata };

export default AgreementDetailPage;
