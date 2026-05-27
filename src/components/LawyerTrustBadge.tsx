import Image from "next/image";

type Lawyer = {
  name: string;
  initials: string;
  imageSrc?: string;
  bgColor?: string;
};

type LawyerTrustBadgeProps = {
  lawyers?: Lawyer[];
  totalCount?: number;
  headline?: string;
  subtext?: string;
  rating?: number;
};

const defaultLawyers: Lawyer[] = [
  { name: "Riya Shah", initials: "RS", bgColor: "#C9A87A" },
  { name: "Mohan Kumar", initials: "MK", bgColor: "#7E9046" },
  { name: "Anjali Patel", initials: "AP", bgColor: "#A67C52" },
  { name: "Vikram Nair", initials: "VN", bgColor: "#5E7235" },
];

export default function LawyerTrustBadge({
  lawyers = defaultLawyers,
  totalCount = 10,
  headline = "Authorised by 10+ Verified Lawyers",
  subtext = "Drafts reviewed by real legal experts",
  rating = 5,
}: LawyerTrustBadgeProps) {
  const remaining = Math.max(totalCount - lawyers.length, 0);

  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
      {/* Avatar stack */}
      <div
        className="flex -space-x-2.5"
        aria-label={`${totalCount}+ verified lawyers`}
      >
        {lawyers.map((l, i) => (
          <div
            key={i}
            title={l.name}
            className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center overflow-hidden rounded-full border-[2.5px] border-cream text-[10px] sm:text-[11px] font-bold text-white shadow-sm"
            style={{ backgroundColor: l.bgColor ?? "#5E7235" }}
          >
            {l.imageSrc ? (
              <Image
                src={l.imageSrc}
                alt={l.name}
                fill
                sizes="40px"
                className="object-cover"
              />
            ) : (
              <span>{l.initials}</span>
            )}
          </div>
        ))}

        {remaining > 0 && (
          <div
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-[2.5px] border-cream bg-olive-700 text-[10px] sm:text-[11px] font-bold text-white shadow-sm"
            aria-hidden="true"
          >
            +{remaining}
          </div>
        )}
      </div>

      {/* Text block */}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold text-brown-900 sm:text-base">
          {headline}
        </p>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          {/* Stars */}
          <div
            className="flex items-center gap-0.5 text-[#D4A24C]"
            role="img"
            aria-label={`${rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                fill={i < rating ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.365 2.444a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.365-2.444a1 1 0 00-1.176 0l-3.365 2.444c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.103 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
            ))}
          </div>

          <span className="text-xs text-brown-600 sm:text-sm">
            {subtext}
          </span>
        </div>
      </div>
    </div>
  );
}
