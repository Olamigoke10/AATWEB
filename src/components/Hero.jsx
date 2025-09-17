import React from "react";
import Heropng from "../assets/imgs/aatHero.png";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row space-x-5 bg-red-200 rounded-md mt-10 justify-center items-center">
        <div className="md:w-1/2 items-center w-full px-5 py-5">
          <img src={Heropng} alt="" />
        </div>
        <div className="md:w-1/2 w-full px-5">
          <div className="space-y-10">
            <h1 className="font-extrabold text-5xl">AAT ACCOUNTING</h1>
            <p>
              To empower businesses and individuals with proactive, tax-centric
              financial services delivering maximum savings and compliance
              confidence through precision, planning, and expert insight.
            </p>

            <div className="flex flex-row space-x-2">
                <input type="text" className="bg-white border-none px-10 py-5 outline-none rounded-md w-[400px]" placeholder="Enter your email" />
                <button className="bg-black text-white rounded-md px-5"><a href="">Get in touch</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
