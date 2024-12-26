import { Loader2, Mail, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import React, { useRef, useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    profilePicture: "",
  });
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selectedProfilePicture, setSelectedProfilePicture] =
    useState<string>("");
  const loading = false;

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfilePicture(result);
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //    Update Profile Implementation
  };
  return (
    <form onSubmit={updateHandler} className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="realtive md:w-28 md:h-28 w-20 h-20">
            <AvatarImage src={selectedProfilePicture} />
            <AvatarFallback>CN</AvatarFallback>
            <input
              ref={imageRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={fileChangeHandler}
            />
            <div
              onClick={() => imageRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer "
            >
              <Plus className="text-white w-8 h-8" />
            </div>
          </Avatar>
          <input
            type="text"
            name="fullname"
            className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
            value={profileData.fullname}
            onChange={changeHander}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
        <div className="flex items-center gap-4 rounded-sm p-2">
          <Mail className="text-green-600" />
          <div className="m-full">
            <Label>Email</Label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={changeHander}
              className="w-full text-green-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        {loading ? (
          <Button
            type="submit"
            disabled
            className="w-auto bg-green1 hover:bg-hovergreen"
          >
            <Loader2 className="mr-2 w-4 animate-spin" />
            Please Wait...
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-auto bg-green1 hover:bg-hovergreen"
          >
            Update
          </Button>
        )}
      </div>
    </form>
  );
};

export default Profile;
