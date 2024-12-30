import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import { LoginProps, userLoginSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineGoogle, AiOutlineMail, AiOutlineYahoo } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<LoginProps>>({});
  const { login, loading } = useUserStore();
  const navigate = useNavigate();
  const changeEventHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginProps>);
      return;
    }
    try {
      await login(input);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
            <span className="text-sm text-red-950">{errors.email}</span>
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
            <span className="text-sm text-red-950">{errors.password}</span>
          </div>
          <div>
            {loading ? (
              <Button
                type="submit"
                disabled
                className="w-auto bg-green1 hover:bg-hovergreen"
              >
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Please Wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-auto bg-green1 hover:bg-hovergreen hover:border hover:border-black hover:text-black hover:border-b shadow-lg"
              >
                Login
              </Button>
            )}
          </div>

          <Separator />
          <p>Social Authintication</p>
          <div className="flex items-center justify-center space-x-4">
            <Link to="#">
              <AiOutlineGoogle size={24} className="text-green-600" />
            </Link>
            <Link to="#">
              <AiOutlineYahoo size={24} className="text-green-600" />
            </Link>
            <Link to="#">
              <AiOutlineMail size={24} className="text-green-600" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
