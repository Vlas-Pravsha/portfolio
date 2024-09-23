import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="lg:py-2">
      <div className="flex justify-between sm:flex-row flex-col">
        <div className="lg:col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">
              Hello, I&apos;m {""}
            </span>
            Vlas
          </h1>
          <p className="text-[#ADB7Be]  text-base sm:text-lg lg:text-xl mb-6 ">
            I am a front-end developer with a strong ambition to excel in my
            field and become a professional.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full sm:w-fit w-full mr-4 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white ">
              Hire me
            </button>
            <button className="px-1 py-1 rounded-full sm:w-fit w-full  bg-transparent  bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Dowload CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/Images/me.jpeg"
              alt="Hero"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
