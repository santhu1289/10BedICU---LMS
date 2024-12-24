import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineGoogle, AiOutlineMail, AiOutlineYahoo } from "react-icons/ai";

import { Link } from "react-router-dom";

type LoginProps = {
  email: string;
  password: string;
};

const Login = () => {
  const [input, setInput] = useState<LoginProps>({
    email: "",
    password: "",
  });
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
  };
  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:pd:8 overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-md  md:border mx-4 border-gray-300 p-4 rounded-lg "
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">10BedICU</h1>
        </div>
        <div className="space-y-4">
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
                className="w-auto bg-green hover:bg-hovergreen hover:border hover:border-black hover:text-black hover:border-b shadow-lg"
              >
                Login
              </Button>
            )}
          </div>

          <Separator />
          <p>Social Authintication</p>
          <div className="flex items-center justify-center space-x-4">
            <Link to="#">
              <AiOutlineGoogle size={24} className="bg-green-300" />
            </Link>
            <Link to="#">
              <AiOutlineYahoo size={24} className="bg-green-300" />
            </Link>
            <Link to="#">
              <AiOutlineMail size={24} className="bg-green-300" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
