import image from "../assets/1.jpg";

const CourseDetails = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Image Section */}
      <div className="w-full max-w-6xl mb-10">
        <div className="relative w-auto h-32 md:h-64 lg:h-full">
          <img
            src={image}
            alt="Res_Img"
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full flex items-center justify-center overflow-auto p-5">
        <div className="max-w-4xl w-full ">
          <iframe
            src="https://drive.google.com/file/d/1lUHfUPk8g8PtFVx0NrpeAmvezZ3Q7o70/preview"
            width="100%"
            height="504px"
            allow="autoplay"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
