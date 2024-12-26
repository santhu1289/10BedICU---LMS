import HeroImg from "../assets/herobanner.jpeg";
import Categories from "./Categories";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="max-w-full">
        <img
          src={HeroImg}
          alt="Hero"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Hero Content */}
      <HeroContent />

      {/* Categories Component */}
      <div className="flex items-center justify-between mt-8 mb-8">
        <Categories />
      </div>
    </div>
  );
};

export default HeroSection;
