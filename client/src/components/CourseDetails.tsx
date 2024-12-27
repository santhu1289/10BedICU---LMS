import ReactPlayer from "react-player";
import image from "../assets/1.jpg";

const CourseDetails = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      {/* Image Section */}
      <div className="w-full">
        <div className="relative w-auto h-32 md:h-64 lg:h-full">
          <img
            src={image}
            alt="Res_Img"
            className="object-cover w-auto h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full mt-6">
        <div className="relative w-auto">
          <iframe
            src="https://drive.google.com/file/d/1lUHfUPk8g8PtFVx0NrpeAmvezZ3Q7o70/preview"
            width="100%"
            height="500px"
            allow="autoplay"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
