import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Receipt } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | Founding Legals",
  description:
    "Refund & Cancellation Policy for Founding Legals (Arvya Tech Pvt. Ltd.) — how subscriptions, credits, government fees and professional fees are treated on cancellation.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-[70px] sm:pt-[82px]">
      <Header />

      {/* Hero */}
      <section className="bg-[#5A6E3B] px-6 py-16 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-white/90 text-[13px] font-medium mb-6">
            <Receipt className="w-3.5 h-3.5" />
            Billing
          </div>
          <h1 className="text-[40px] sm:text-[56px] font-serif font-medium text-white leading-tight mb-4">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-white/80 text-[16px] leading-relaxed">
            Effective date:{" "}
            <strong className="text-white/90">29 May 2026</strong>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-10 text-[15px] sm:text-[16px] text-[#4b4843] leading-[1.8]">
        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            1. About this Policy
          </h2>
          <p>
            This Refund &amp; Cancellation Policy applies to all paid services
            purchased on the <strong>Founding Legals</strong> platform
            (&ldquo;Platform&rdquo;), operated by{" "}
            <strong>Arvya Tech Pvt. Ltd.</strong> (CIN:{" "}
            <strong>U62011AP2025PTC121416</strong>), having its registered
            office at 5th Floor, The Herbt&apos;s Square Building, Autonagar,
            APIIC IT Park, Mangalagiri, Amaravati, Andhra Pradesh 522503,
            India. It should be read together with our{" "}
            <a
              href="/terms"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              Terms &amp; Conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            2. Subscription Plans &amp; Credits
          </h2>
          <p>
            Subscription plans and credit packs purchased on the Platform are{" "}
            <strong>non-refundable</strong>. Specifically:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
            <li>
              Fees paid for any subscription plan are <strong>not refundable</strong>{" "}
              upon cancellation, in whole or in part, whether the cancellation
              is at your request or by us for breach of the Terms.
            </li>
            <li>
              On cancellation, you will continue to have access to the paid
              features for the remainder of the then-current billing period
              already paid for; the plan will not auto-renew thereafter.
            </li>
            <li>
              Unused <strong>credits</strong> at the time of cancellation are
              forfeited and have no cash value. Credits are non-transferable.
            </li>
            <li>
              Free or promotional credits may be withdrawn at any time and are
              not refundable in any circumstance.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            3. Government Fees &amp; Statutory Charges
          </h2>
          <p>
            For services that involve filings with a government authority
            (such as MCA / SPICe+, GSTN, DPIIT, ROC, or the Income Tax
            Department), the invoice separately identifies{" "}
            <strong>government fees / statutory charges</strong> from the
            Company&apos;s platform/service fees.
          </p>
          <p className="mt-4">
            Once government fees or statutory charges have been remitted to
            the relevant authority on your behalf, those amounts are{" "}
            <strong>strictly non-refundable</strong>, irrespective of whether
            the filing is ultimately accepted, rejected, withdrawn, or
            cancelled by you, and irrespective of the cause of any such
            outcome.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            4. Professional &amp; Marketplace Services
          </h2>
          <p>
            Where you engage an independent professional (such as a Chartered
            Accountant, Company Secretary or advocate) through the Platform,
            the professional service is rendered by that independent
            professional. Professional fees, once the professional has
            commenced work on your matter, are non-refundable except as
            expressly agreed in writing between you and that professional.
            The Company does not share in advocates&apos; legal fees; it
            charges only a separate platform/technology fee.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            5. Cancellation of Subscriptions
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              You may cancel an auto-renewing subscription at any time from the
              in-app billing settings or by writing to{" "}
              <a
                href="mailto:info@foundinglegals.com"
                className="text-[#5A6E3B] font-medium hover:underline"
              >
                info@foundinglegals.com
              </a>
              . The cancellation will take effect at the end of your
              then-current billing period.
            </li>
            <li>
              We may cancel or suspend your subscription where you are in
              material breach of the Terms, where there is suspected fraud,
              chargeback abuse or unlawful use, or where required by law or
              regulator. No refund will be payable in such cases.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            6. Limited Discretionary Refunds
          </h2>
          <p>
            Notwithstanding the above, in cases of demonstrable duplicate
            payment, an erroneous charge made by the Company, or a failure by
            the Company to deliver a specifically purchased one-time service
            in circumstances solely attributable to the Company, we may at our
            reasonable discretion process a refund or credit to your account.
            Refund requests on these grounds must be submitted within{" "}
            <strong>seven (7) days</strong> of the relevant charge to{" "}
            <a
              href="mailto:info@foundinglegals.com"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              info@foundinglegals.com
            </a>
            , together with your invoice / payment reference.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            7. Processing of Approved Refunds
          </h2>
          <p>
            Where a refund is approved, it will be processed to the original
            payment instrument used for the transaction, normally within{" "}
            <strong>seven to ten (7&ndash;10) working days</strong> of
            approval. Actual credit timelines depend on your bank or card
            issuer.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            8. Taxes
          </h2>
          <p>
            Where any refund is processed, applicable taxes (including GST)
            will be adjusted in accordance with law. Credit notes will be
            issued where required for tax purposes.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            9. Chargebacks
          </h2>
          <p>
            We request that you raise any billing concern with us in the first
            instance before initiating a chargeback with your card issuer or
            bank. Unjustified chargebacks may result in suspension of your
            account and recovery action for amounts due, including the
            Company&apos;s costs.
          </p>
        </div>

        <div>
          <h2 className="text-[22px] font-serif font-semibold text-[#2b2723] mb-3">
            10. Contact
          </h2>
          <p>
            Billing queries:{" "}
            <a
              href="mailto:info@foundinglegals.com"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              info@foundinglegals.com
            </a>
            . Grievances regarding billing may also be raised with our
            Grievance Officer as set out in the{" "}
            <a
              href="/privacy-policy#grievance"
              className="text-[#5A6E3B] font-medium hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
