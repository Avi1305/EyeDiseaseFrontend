const HeroSection = () => (
  <section className="pt-20 pb-32 px-4 bg-gradient-to-br from-white/80 via-blue-50/50 to-indigo-50/50">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Advanced Eye Disease <span className="text-indigo-600">Prediction</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Using cutting-edge AI technology to detect and predict eye diseases early.
        </p>
       
        <button
          onClick={() => {
            const section = document.getElementById('register');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
        >
          Get Started
        </button>



      </div>
      
    </div>
  </section>
);

export default HeroSection;
