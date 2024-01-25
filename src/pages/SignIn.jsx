import bg from "../../public/bg.png";

import React from "react";
import { BsGithub, BsDiscord, BsTwitter, BsLinkedin } from "react-icons/bs";

import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Image from "next/image";
import { signIn } from "next-auth/react";

const socials = [
  {
    id: 1,
    icon: <BsGithub className="text-white w-10 h-10" />,
    title: "Gihtub",
  },
  {
    id: 2,
    icon: <BsDiscord className="text-white w-10 h-10" />,
    title: "Discord",
  },
  {
    id: 3,
    icon: <BsTwitter className="text-white w-10 h-10" />,
    title: "Twitter",
  },
  {
    id: 4,
    icon: <BsLinkedin className="text-white w-10 h-10" />,
    title: "LinkedIn",
  },
];

const Singin = () => {
  const socialArray = socials.map((items) => {
    return (
      <div key={items.id} className="px-5 cursor-pointer">
        {items.icon}
      </div>
    );
  });

  return (
    <div className="flex h-[100vh] bg-[#F8FAFF] ">
      <div className="hidden md:flex md:flex-col md:min-w-[50%]  md:justify-between">
        <Image src={bg} className="fixed" />
        <div className="flex flex-col h-full justify-between z-10 px-20 py-10">
          <h1 className="text-white font-bold text-lg">LOGO</h1>
          <div className="ml-20">
            <h1 className="text-6xl text-white font-bold font-montserrat ">
              Board.
            </h1>
          </div>
          {/* Social links */}
          <div className="flex ">{socialArray}</div>
        </div>
      </div>
      <div className="flex flex-col  md:min-w-[50%] px-10 m-auto items-start justify-center">
        <div>
          <h1 className="text-4xl font-bold my-2 font-montserrat  ">Sign In</h1>
          <p className="my-2 font-lato">Sign in to your account</p>
        </div>

        {/* Quick Sign In */}
        <div className="flex  mt-3">
          <div>
            <button
              type="button"
              className="flex items-center font-montserrat   bg-white  justify-center text-white px-4 py-3 text-xs mr-5 border rounded-md"
              onClick={() => signIn("google")}
            >
              <FcGoogle className="mr-2 text-center w-5 h-5" />
              <h1 className="text-[#858585]">Sign in with Google</h1>
            </button>
          </div>
          <button
            type="button"
            className="flex text-[#858585] font-montserrat font-light items-center bg-white px-4 py-3 text-xs  border rounded-md"
          >
            <BsApple className="mr-2 text-center w-5 h-5" />
            <h1 className="">Sign in with Apple</h1>
          </button>
        </div>

        {/* Login Form */}
        <div className="border min-w-full  md:min-w-[55%] my-5 rounded-lg">
          <form className="px-5 py-7 ">
            <label>
              <span className="font-lato">Email address</span>
              <br />
              <input
                className="py-2 font-lato border rounded-lg px-5 w-full mb-4 mt-2 bg-[#EAEAEA]"
                placeholder="email"
              />
            </label>
            <br />
            <label>
              <span className="font-lato">Password</span>
              <br />
              <input
                placeholder="password"
                className="py-2 border font-lato bg-[#EAEAEA] rounded-lg px-5 w-full mb-4 mt-2"
              />
            </label>
            <p className="my-4 text-[#346BD4] font-lato ">Forgot password?</p>
            <button
              type="button"
              onClick={() => {
                alert("Sign in with Google button");
              }}
              className="w-full py-2 bg-[#4285F4] rounded-lg text-white font-semibold font-montserrat"
            >
              Sign In
            </button>
            <p className="text-center my-7 text-xs font-lato">
              Don't have an account?{" "}
              <span className="text-[#4285F4] cursor-pointer">
                Register here
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singin;
