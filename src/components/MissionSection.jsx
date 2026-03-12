import Button from "./common/Button";

const MissionSection = () => {
  return (
    <section className="w-full bg-bg-card py-16 px-6 transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Top Decorative Divider */}
        <div className="flex justify-start mb-8">
          <div className="w-64 h-0 border-t-2 border-dashed border-brand-primary"></div>
        </div>

        {/* Main Text Content */}
        <p className="text-text-main text-lg text-center px-4 mb-8">
          Every GirlLEAD fellow is offered an <b>immersive technical</b> and <b>leadership training</b>, professional <b>mentorship</b> and <b>real-world experience</b>, and the support of a vibrant <b>community</b> of women in tech.
        </p>

        {/* Bottom Decorative Divider */}
        <div className="flex justify-end mb-10">
          <div className="w-64 h-0 border-t-2 border-dashed border-brand-primary"></div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <Button
            to="/about"
            variant="primary"
            size="lg"
          >
            How We Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;