import { Link } from "react-router-dom";
import logo from "../assets/10bediculogo.png";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  BookA,
  Home,
  Info,
  Loader2,
  Menu,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useUserStore } from "@/store/useUserStore";

const Navbar = () => {
  const { user, loading, logout } = useUserStore();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-20">
        <Link to="/">
          <div className="flex items-center md:space-x-3 space-x-1">
            <img
              src={logo}
              className="md:w-auto md:h-[80px] w-auto h-[40px]"
              alt="Logo"
            />
            <h1 className="font-bold md:font-extrabold md:text-2xl text-xl text-white">
              10BedICU
            </h1>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4  text-white">
            <Link to="/">Home</Link>
            <Link to="#">About</Link>
            <Link to="/courses">Courses</Link>
            {user ? <Link to="/profile">Profile</Link> : " "}
          </div>
          {user?.admin && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>DashBoard</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link to="/adminpanel"> Admin Dashboard </Link>
                    <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>

                  <MenubarSeparator />
                  <MenubarItem>
                    <Link to="/login">Logout</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Add User</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {user ? (
            <div>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          ) : (
            ""
          )}

          <div>
            {loading ? (
              <Button className="bg-green1 hover:bg-hovergreen">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait ...
              </Button>
            ) : (
              <Button
                onClick={logout}
                className="hover:bg-hovergreen w-auto bg-green1 hover:border hover:border-black hover:text-black hover:border-b shadow-lg"
              >
                LogOut
              </Button>
            )}
          </div>
        </div>
        {/* Mobile Responsive */}
        <div className="md:hidden lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const user = false;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          className="rounded-full bg-green text-black hover:bg-hovergreen"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>10BedICU</SheetTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Light</DropdownMenuItem>
              <DropdownMenuItem>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SheetHeader>
        <DropdownMenuSeparator />
        <SheetDescription className="flex-1">
          <Link
            to="/"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
          >
            <Home />
            <span>Home</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
          >
            <User />
            <span>Profile</span>
          </Link>

          <Link
            to="#"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
          >
            <Info />
            <span>About</span>
          </Link>
          <Link
            to="/courses"
            className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
          >
            <BookA />
            <span>Courses</span>
          </Link>
        </SheetDescription>

        <SheetFooter>
          {user ? (
            <>
              <div className="flex items-center gap-4 ">
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1>User Name</h1>
                <SheetClose asChild className="flex ml-12">
                  <Button
                    type="submit"
                    className="bg-green hover:bg-hovergreen h-8 w-auto"
                  >
                    Logout
                  </Button>
                </SheetClose>
              </div>
            </>
          ) : (
            <SheetClose asChild>
              <Button
                type="submit"
                className="bg-green hover:bg-hovergreen h-8 w-auto "
              >
                Login
              </Button>
            </SheetClose>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
