
const MissionSection = () => {
  return (
    <section className="w-full bg-cyan-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Top Decorative Divider */}
        <div className="flex justify-start mb-8">
          <div className="w-64 h-0 border-t-2 border-dashed border-teal-600 dark:border-teal-400"></div>
        </div>
        
        {/* Main Text Content */}
        <p className="text-gray-700 dark:text-gray-300 text-lg text-center px-4 mb-8">
          Every GirlLEAD fellow is offered an <b>immersive technical</b> and <b>leadership training</b>, professional <b>mentorship</b> and <b>real-world experience</b>, and the support of a vibrant <b>community</b> of women in tech.
        </p>
        
        {/* Bottom Decorative Divider */}
        <div className="flex justify-end mb-10">
          <div className="w-64 h-0 border-t-2 border-dashed border-teal-600 dark:border-teal-400"></div>
        </div>
        
        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <button
            onClick={() => window.location.href = '/about'}
            className="bg-teal-700 hover:bg-teal-800 text-white font-medium px-8 py-3 rounded-md transition-colors duration-200"
          >
            How We Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;