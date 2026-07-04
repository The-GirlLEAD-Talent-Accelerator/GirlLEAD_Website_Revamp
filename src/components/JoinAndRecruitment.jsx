const joinUrl = "https://forms.gle/cdxiKqPrBpGXucq29";

const benefits = [
  "Opportunity to work with an international and multicultural teams on real time projects",
  "On-the-job mentorship",
  "Gain access to a global network",
  "Work structure",
  "Customized technical training for Team Leads",
  "Obtain a recommendation or certificate after completion of commitment timeline",
];

const steps = [
  { num: "01", label: "Apply" },
  { num: "02", label: "Submit Work Sample" },
  { num: "03", label: "Interview with People & Ops Team & Hiring Manager;" },
  { num: "04", label: "Offer and Onboarding" },
];

export default function JoinAndRecruitment() {
  return (
    <div className="w-full bg-[#dff2f2]">

      {/* Section 1 — Why Join */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-center text-2xl font-bold text-[#0d4a4a] mb-10">
          Why You Should Join Our Team as an Impact Associate
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {benefits.map((text, i) => (
            <div
              key={i}
              className="bg-[#c8eaea] rounded-2xl px-7 py-6 text-sm text-[#0d4a4a] leading-relaxed"
            >
              {text}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href={joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0d5c5c] hover:bg-[#0a4848] text-white text-sm font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Join us now
          </a>
        </div>
      </section>

      <hr className="border-t border-[#b0d8d8] mx-8" />

      

{/* Section 2 — Recruitment Process */}
<section className="py-16 px-8 max-w-5xl mx-auto">
  <h2 className="text-center text-2xl font-bold text-[#0d4a4a] mb-12">
    Our Recruitment Process
  </h2>

  {/* Mobile: vertical stack */}
  <div className="flex flex-col gap-0 md:hidden mb-12">
    {steps.map((step, i) => (
      <div key={i} className="flex items-start gap-4">

        {/* Left: number + vertical line */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-[#c0dada] leading-none">
            {step.num}
          </span>
          {i < steps.length - 1 && (
            <div className="w-px flex-1 min-h-[32px] border-l-2 border-dashed border-[#90c0c0] my-1" />
          )}
        </div>

        {/* Right: dot + label */}
        <div className="flex items-start gap-2 pt-1 pb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0d5c5c] flex-shrink-0 mt-1" />
          <p className="text-sm font-semibold text-[#0d5c5c] leading-snug">
            {step.label}
          </p>
        </div>

      </div>
    ))}
  </div>

  {/* Desktop: horizontal timeline */}
  <div className="hidden md:flex items-start justify-center mb-12">
    {steps.map((step, i) => (
      <div key={i} className="flex items-start flex-shrink-0">
        <div className="flex flex-col items-center w-32 md:w-40">
          <div className="flex items-center w-full">
            {i > 0 && <div className="flex-1 border-t-2 border-dashed border-[#90c0c0]" />}
            <span className="text-2xl font-bold text-[#c0dada] px-1 flex-shrink-0">
              {step.num}
            </span>
            {i < steps.length - 1 && (
              <>
                <div className="flex-1 border-t-2 border-dashed border-[#90c0c0]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#0d5c5c] flex-shrink-0" />
              </>
            )}
          </div>
          <p className="text-center text-sm font-semibold text-[#0d5c5c] mt-3 leading-snug px-1">
            {step.label}
          </p>
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-center">
    <a
      href={joinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0d5c5c] hover:bg-[#0a4848] text-white text-sm font-medium px-8 py-3 rounded-lg transition-colors"
    >
      Join us now
    </a>
  </div>
</section>

    </div>
  );
}