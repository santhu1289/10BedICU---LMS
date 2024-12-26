const HeroContent = () => {
  return (
    <>
      <div className="flex md:flex-row justify-center items-center gap-4 p-6 pt-0">
        <div className="border border-gray-300 overflow-hidden text-center rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          {/* Main container */}
          <div className="relative bg-white p-8 rounded-lg shadow-lg mt-2 max-w-3xl ml-auto">
            {/* Text content */}
            <h1 className="md:text-3xl text-xl text-[#009ba4] font-bold mb-4">
              Hello, welcome to
            </h1>
            <h2 className="md:text-4xl text-2xl text-[#103e41] font-extrabold mb-6">
              Comprehensive Critical Care Training
            </h2>

            {/* Blue box at the rightmost */}
            {/* <div className="absolute top-0 right-[-20px] w-20 h-full bg-[#009ba4] rounded-r-lg"></div> */}
          </div>
        </div>
      </div>
      <div className="w-90 m-3 ml-12 py-0">
        <p className="text-center hover:font-bold text-[#103e41] font-semibold text-mb leading-relaxed">
          The{" "}
          <span className="text-lg font-bold text-[#009ba4]">
            10BedICU Project&apos;s Training Portal
          </span>{" "}
          is an initiative designed to standardize healthcare education
          nationwide. This centralized platform empowers healthcare
          professionals with streamlined access to training resources, including
          videos, study materials, and additional tools. By fostering the
          development of Trainers of Trainers (ToTs), the portal plays a pivotal
          role in extending knowledge and ensuring consistency in training
          across all 10BedICU hospitals. Whether for refresher courses or spoke
          training, this platform simplifies learning while maintaining high
          standards of care.
        </p>
      </div>
    </>
  );
};

export default HeroContent;
