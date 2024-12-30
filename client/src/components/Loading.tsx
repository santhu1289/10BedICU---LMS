import imageSrc from "../assets/10bediculogo.png";
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-32 h-32">
        {/* Spinning border */}
        <div className="absolute inset-0 rounded-xl border-4 border-t-4 border-t-blue-500 border-gray-300 animate-spin"></div>
        {/* Center image */}
        <img
          src={imageSrc}
          alt="Loader"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Loading;
