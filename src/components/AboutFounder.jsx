import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const founderShort = (
  <>
    Augustine <em>"Ebos"</em> Enodiana was a visionary leader, social entrepreneur, and healthcare
    professional dedicated to improving lives through innovation and service. With expertise spanning
    product management, clinical optometry, health-tech, and social impact, he championed initiatives
    that empowered communities, especially young girls and women through the GirLEAD Talent
    Accelerator. Recognized internationally for his contributions, he worked with organizations such
    as UNICEF, Stanford University, AIESEC, and Reliance Health to develop impactful healthcare and
    educational solutions across Africa. Though he passed away in December 2023, his legacy of
    compassion, leadership, and empowerment continues to inspire many.
  </>
);

const founderFull = (
  <>
    <p className="mb-4">
      Ebosalumhen Augustine Enodiana, <em>"Ebos"</em> as loved ones fondly called him, was a
      visionary leader whose passion for service inspired meaningful solutions that improved lives.
      With a rare blend of expertise in product management, social entrepreneurship, data analysis,
      clinical optometry, research, and healthcare, he dedicated his life to creating impact and
      empowering others.
    </p>

    <p className="mb-4">
      In 2015, Augustine was recognized as one of Africa's outstanding young social entrepreneurs,
      receiving the prestigious Study of the U.S. Institutes (SUSI) Social Entrepreneurship Award.
      He went on to earn his Doctor of Optometry (O.D.) degree from the University of Benin in
      Nigeria in 2017. His commitment to innovation and growth continued, and in 2021, he was
      awarded a UNICEF scholarship to participate in the "Idea-to-Market: Innovation Execution"
      program at the Stanford University Center for Professional Development and Global Innovation
      Catalyst program.
    </p>

    <p className="mb-4">
      Augustine built a remarkable career spanning healthcare and social impact. He had three years
      of clinical practice experience, two years of developing and managing health-tech products
      tailored for African communities, and over eight years coordinating impactful social
      initiatives. His work with AIESEC saw him leading medical and educational outreach programs
      for communities affected by the <em>Boko Haram</em> insurgency in Nigeria.
    </p>

    <p className="mb-4">
      Driven by his deep belief in human potential, Augustine founded the GirLEAD Talent
      Accelerator, an initiative dedicated to equipping young girls and women with digital skills,
      training in STEM, social entrepreneurship, and career development opportunities. Through this
      and other initiatives, he created pathways for thousands of individuals, especially women, to
      grow, thrive, and contribute meaningfully to society.
    </p>

    <p className="mb-4">
      Professionally, he served as a Product Manager at Reliance Health, a leading health-tech
      company focused on making quality healthcare affordable, accessible, and delightful across
      emerging markets. There, he worked with multidisciplinary teams of clinicians and digital
      experts to develop innovative eHealth solutions, including electronic medical records,
      pharmacy management systems, and Telemedicine platforms for Reliance Family Clinics.
    </p>

    <p className="mb-8">
      Augustine was deeply passionate about service to humanity, and his life's work reflected that
      calling. Though he passed away after a brief illness in December 2023, his legacy continues
      to live on through the enduring impact of his work and the dedication of the GirLEAD team
      and the wider community he inspired.
    </p>

    {/* Subheader */}
    <h4 className="text-lg font-bold text-text-main mb-4">Inspiration</h4>

    <p className="mb-4">
      His inspiration stems from personal experiences, societal observations, and a deep commitment
      to problem-solving. As an undergraduate STEM student, he was deeply involved in tech, science,
      volunteering, and leadership activities on campus, including the Google Student Developer Group
      and AIESEC. In many of his outreaches to secondary schools, educating primary and secondary
      school pupils about personal development, volunteerism, and social impact, he couldn't ignore
      the stark disparities that persisted in marginalized communities, where girls faced limited
      access to quality education and personal development opportunities.
    </p>

    <p className="mb-4">
      In one of those outreaches, a pupil curiously asked him, "We keep hearing that we should not
      let our gender define the career that we want, but how can we pursue our passion for STEM when
      we rarely find other women pursuing theirs?" Many girls believed that STEM careers were for men
      and that women should be limited to less ambitious pedagogy. In the same vein, many of his
      course mates would deliberately refrain from participating in tech programs on campus because
      they often felt left out, lacking mentorship support and opportunities compared to their male
      counterparts.
    </p>

    <p className="mb-4">
      However, he was inspired by the stories of women who broke barriers and achieved great success
      in STEM, entrepreneurship, and leadership. One such story was his first mentor, Dr. Linda, a
      senior colleague at his university who excelled in medicine and community development. Through
      her organization, Augustine got his first exposure to volunteerism on campus.
    </p>

    <p className="mb-4">
      Biases and systemic challenges like these need to change because the equal participation of
      women and men in Nigeria's industrialization will positively impact Africa's economic future.
      When women and girls are left behind in accessing opportunities to develop the skills and
      knowledge needed to succeed in STEM fields, the unemployment rate among women worsens, and
      career opportunities and economic empowerment become significantly limited for women. The
      resulting underemployment contributes to poverty, underutilization of the workforce, and
      regressive economic development, thus impeding the actualization of the SDGs by 2030.
    </p>

    <p className="mb-4">
      In 2015, he received the Study of the U.S. Institutes Social Entrepreneurship award from the
      U.S. State Department, where he and three (3) other student leaders represented Nigeria in a
      social entrepreneurship fellowship in the United States. Upon returning to Nigeria, he founded
      the GirlLEAD Project.
    </p>

    <p className="mb-4">
      From a small project aimed at organizing boot camps to teach digital skills and social
      entrepreneurship to girls in his university, it grew to become a social enterprise, GirlLEAD
      Talent Accelerator, dedicated to bridging the digital gender divide through quality education,
      training, and career development opportunities in STEM and social entrepreneurship for women
      and girls in marginalized African communities. Many of our key team members have faced these
      challenges firsthand, struggling to access opportunities and resources due to gender bias.
      These experiences have fueled our determination to create a platform that ensures other women
      and girls don't encounter the same obstacles because gender equity in STEM is not just good
      for women; it's good for everybody, and it's good for the future of technology.
    </p>

    <p className="mb-4">
      By replacing social and cultural barriers to STEM with access to technology, mentorship, and
      digital skills, GirlLEAD empowers women and girls to reach their full potential.
    </p>
  </>
);

export default function AboutFounder() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-bg-soft py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

          {/* Heading */}
          <h2 className="text-2xl font-bold text-text-main mb-8">
            About the Founder
          </h2>

          {/* Founder image – reduced, original shape, high quality */}
          <div className="w-48 sm:w-56 md:w-64 overflow-hidden border-4 border-border-soft shadow-md mb-6 mx-auto">
            <img
              src="/Founder.png"
              alt="Augustine Enodiana"
              className="w-full h-auto object-contain"
              style={{ imageRendering: "auto" }}
            />
          </div>

          {/* Short preview text */}
          <p className="text-sm sm:text-base text-text-muted max-w-xl leading-relaxed text-left sm:text-center">
            {founderShort}{" "}
            <button
              onClick={() => setOpen(true)}
              className="text-brand-primary underline font-medium hover:text-brand-deep transition-colors"
            >
              Read more
            </button>
          </p>

        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <Motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Modal content */}
            <Motion.div
              className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto z-10 p-8 sm:p-12"  
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Founder image in modal – compact, original shape */}
              <div className="w-40 sm:w-48 overflow-hidden border-4 border-border-soft shadow-md mx-auto mb-6">
                <img
                  src="/Founder.png"
                  alt="Augustine Enodiana"
                  className="w-full h-auto object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </div>

              {/* Modal heading */}
              <h3 className="text-xl font-bold text-text-main text-center mb-6">
                About the Founder
              </h3>

              {/* Full biography */}
              <div className="text-sm sm:text-base text-text-muted leading-relaxed">
                {founderFull}
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}