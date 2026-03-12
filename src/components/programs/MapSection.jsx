export default function MapSection() {
    return (
        <section className="bg-bg-alt py-16 px-4 md:px-6 md:py-24">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="md:w-5/12 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-accent leading-tight">
                        We operate in<br />
                        multiple countries<br />
                        in Africa
                    </h2>
                </div>

                {/* Map Image Content */}
                <div className="md:w-7/12 flex justify-center w-full">
                    <img
                        src="/map-programs.svg"
                        alt="Map showing operational countries in Africa"
                        className="w-full max-w-2xl object-contain hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
