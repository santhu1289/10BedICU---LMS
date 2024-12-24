import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import {
  Loader2,
  LockKeyhole,
  Mail,
  User,
  
  UserCheck,
} from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

type SignupProps = {
  email: string;
  password: string;
  fullName: string;
  role: string;
};

const SignUp = () => {
  const [input, setInput] = useState<SignupProps>({
    email: "",
    password: "",
    fullName: "",
    role: "",
  });

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const SignupSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
  };

  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={SignupSubmitHandler}
        className="md:pd:8 w-full max-w-md md:border mx-4 border-gray-300 p-4 rounded-lg"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Sign Up only Admin</h1>
        </div>
        <div className="space-y-4">
          {/* Full Name Input */}
          <div className="relative">
            <Input
              type="text"
              name="fullName"
              value={input.fullName}
              onChange={changeEventHandler}
              placeholder="Enter your Full Name"
              className="pl-10 focus-visible:ring-1"
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          </div>

          {/* Email Input */}
          <div className="relative">
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter your Email"
              className="pl-10 focus-visible:ring-1"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your Password"
              className="pl-10 focus-visible:ring-1"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          </div>

          <div className="flex items-start pl-3 space-x-2">
            {/* Role Icon */}
            <UserCheck className="text-gray-500 mt-1" />

            {/* Role Label and Radio Buttons */}
            <div>
              <label className="block text-sm font-medium text-gray-700 m-2">
                Role
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={input.role === "admin"}
                    onChange={changeEventHandler}
                    className="form-radio text-black"
                  />
                  <span>Admin</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={input.role === "user"}
                    onChange={changeEventHandler}
                    className="form-radio text-green-500"
                  />
                  <span>User</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            {loading ? (
              <Button
                type="submit"
                disabled
                className="w-auto bg-green hover:bg-hovergreen"
              >
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Please Wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-auto bg-green hover:bg-hovergreen"
              >
                SignUp
              </Button>
            )}
          </div>

          <Separator />
          <p>
            Already Have an Account?
            <span className="ml-2 text-xl text-gray-500">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
