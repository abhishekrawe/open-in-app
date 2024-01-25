import bg from "/Leftside.png";

import React from "react";
import { AppleIcon, BaseSignLogo, DiscordIcon, DiscordMobile, GitMobile, GithubIcon, GoogleIcon, LinkedInIcon, LinkedinMobile, TweetMobile, TwitterIcon } from "../assets/icons"

// import { signIn } from "next-auth/react";

const socials = [
  {
    id: 1,
    icon: <GithubIcon className="text-black-10 w-10 h-10" />,
    title: "Gihtub",
  },
  {
    id: 2,
    icon: <TwitterIcon className="text-white w-10 h-10" />,
    title: "Twitter",
  },
  {
    id: 3,
    icon: <LinkedInIcon className="text-white w-10 h-10" />,
    title: "LinkedIn",
  },
  {
    id: 4,
    icon: <DiscordIcon className="text-white w-10 h-10" />,
    title: "Discord",
  },
  
];

const socialsMobile = [
  {
    id: 1,
    icon: <GitMobile className="text-black-10 w-10 h-10" />,
    title: "Gihtub",
  },
  {
    id: 2,
    icon: <TweetMobile className="text-white w-10 h-10" />,
    title: "Twitter",
  },
  {
    id: 3,
    icon: <LinkedinMobile className="text-white w-10 h-10" />,
    title: "LinkedIn",
  },
  {
    id: 4,
    icon: <DiscordMobile className="text-white w-10 h-10" />,
    title: "Discord",
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

  const socialMobile = socialsMobile.map((items) => {
    return (
      <div key={items.id} className="px-2 cursor-pointer">
        {items.icon}
      </div>
    );
  });

  return (
    <div className="flex h-[100vh] bg-gray-signin ">
      <div className="hidden md:flex md:flex-col md:min-w-[50%]  md:justify-between">
        <img src={bg} className="fixed" />
        <div className="flex flex-col h-full justify-between z-10 px-20 py-10">
           <BaseSignLogo/>
          <div className="ml-20">
            <h1 className="text-6xl text-white-10 font-bold font-montserrat ">
              BASE
            </h1>
          </div>
          {/* Social links */}
          <div className="flex ">{socialArray}</div>
        </div>
      </div>
      <div className="flex flex-col  md:min-w-[50%] px-8 m-auto items-start justify-center">
        <div>
          <h1 className="text-4xl font-bold my-2 font-montserrat  ">Sign In</h1>
          <p className="my-2 font-lato">Sign in to your account</p>
        </div>

        {/* Quick Sign In */}
        <div className="flex  mt-3 gap-2 md:gap-7">
          <div>
            <button
              type="button"
              className="flex items-center font-montserrat bg-white-20 justify-center text-gray-signintext px-4 md:px-7 py-3 text-xs rounded-md gap-2"
              onClick={() => signIn("google")}
            >
              <GoogleIcon className="mr-2 text-center w-5 h-5" />
              <h1 className="text-[#858585] whitespace-nowrap ">Sign in with Google</h1>
            </button>
          </div>
          <button
            type="button"
            className="flex  font-montserrat font-light items-center bg-white px-4 md:px-7 py-3 text-xs bg-white-20 rounded-md gap-2"
          >
            <AppleIcon className="mr-2 text-center w-5 h-5" />
            <h1 className="text-[#858585]  whitespace-nowrap">Sign in with Apple</h1>
          </button>
        </div>

        {/* Login Form */}
        <div className="min-w-full  md:min-w-[55%] my-5 rounded-lg bg-white-20">
          <form className="px-5 py-7 ">
            <label>
              <span className="font-lato">Email address</span>
              <br />
              <input
                className="py-2 font-lato rounded-lg px-5 w-full mb-4 mt-2 bg-white-30"
                placeholder="email"
              />
            </label>
            <br />
            <label>
              <span className="font-lato">Password</span>
              <br />
              <input
                placeholder="password"
                className="py-2 font-lato bg-white-30 rounded-lg px-5 w-full mb-4 mt-2"
              />
            </label>
            <p className="my-4 text-[#346BD4] font-lato ">Forgot password?</p>
            <button
              type="button"
              onClick={() => {
                alert("Sign in with Google button");
              }}
              className="w-full py-2 bg-blue-10 rounded-lg text-white-10 font-semibold font-montserrat"
            >
              Sign In
            </button>
            <p className="text-center my-7 text-sm font-lato">
              Don't have an account?{" "}
              <span className="text-[#346BD4] cursor-pointer">
                Register here
              </span>
            </p>
          </form>
        </div>

        <div className="flex visible md:invisible ml-12">
          <div className="flex ">{socialMobile}</div>
        </div>
      </div>
    </div>
  );
};

export default Singin;
