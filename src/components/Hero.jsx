import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Perfect
              <span className="block text-primary"><span className="brand-gradient-text">
  Development Stack
</span></span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0">
              Explore popular technologies, discover the tools developers love,
              and build your own development stack.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <a
                href="#technologies"
                className="btn brand-gradient-bg border-0 text-white"
              >
                Explore Technologies
              </a>

              <a href="#my-stack" className="btn btn-outline">
                View My Stack
              </a>
            </div>
          </div>

          {/* Banner Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={banner}
              alt="Development Stack"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
