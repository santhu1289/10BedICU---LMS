import { AspectRatio } from "./ui/aspect-ratio";
import { Card, CardContent } from "./ui/card";
import OnlineClass from "../assets/online.jpeg";
import OfflineClass from "../assets/hands on.jpeg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="w-full max-w-4xl mx-auto pt-10 pb-8">
      {/* Heading */}
      <div className="w-full text-center mb-8">
        <h1 className="md:text-5xl  text-3xl font-bold text-[#103e41]">
          Course Material
        </h1>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Online Class Card */}
        <Link to="/onlinecourse">
          <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <AspectRatio ratio={16 / 10}>
                <img
                  src={OnlineClass}
                  alt="online class"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg px-3 py-1">
                <span className="text-sm font-medium text-[#103e41] dark:text-green-300">
                  Online Courses
                </span>
              </div>
            </div>
            <CardContent className="p-4">
              <h1 className="text-2xl font-bold text-[#103e41] dark:text-green-300">
                Online Class Courses
              </h1>
              <div className="mt-2 gap-1 flex items-center text-green-600 dark:text-green-400">
                <p>12 Days Online Class Training available in videos...</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        {/* Hands-On Class Card */}
        <Link to="/handsoncourses">
          <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <AspectRatio ratio={16 / 10}>
                <img
                  src={OfflineClass}
                  alt="hands-on class"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg px-3 py-1">
                <span className="text-sm font-medium text-[#103e41] dark:text-green-300">
                  HandsOn Courses
                </span>
              </div>
            </div>
            <CardContent className="p-4">
              <h1 className="text-2xl font-bold text-[#103e41] dark:text-green-300">
                HandsOn Class Courses
              </h1>
              <div className="mt-2 gap-1 flex items-center text-green-600 dark:text-green-400">
                <p>5 Days Training courses video is available</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
