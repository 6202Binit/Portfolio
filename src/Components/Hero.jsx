
import React from 'react';
import binitImage from './binit.png';

const Hero = () => {
  return (
    <section className="bg-cover bg-center bg-black text-fafafc py-32 px-6">
      <div className="flex flex-col sm:flex-row max-w-6xl mx-auto items-center justify-between">
        <span className="max-w-full sm:max-w-1/2 text-center sm:text-left">
          <h1 className="font-black text-2xl sm:text-[3.25rem] leading-tight mb-6">
            <span className="animate-fade-in-up">
              Hi, I'm <span className="text-yellow-500">Bi</span>nit Ku<span className="text-yellow-500">ma</span>r <span className="text-yellow-500">Jha</span>
            </span>
            <br />
            <span className="animate-fade-in-up">
              Software <span className="text-yellow-500">Dev</span>eloper
            </span>
          </h1>
          <a href="#" className="inline-block py-3 px-6 mt-4 text-xl font-bold text-[#0a0c2c] bg-[#f7c948] rounded-full shadow-md hover:bg-[#f7b100] transition transform hover:-translate-y-1 hover:shadow-lg">
            Explore Now
          </a>
        </span>
        <div className="mt-8 sm:mt-0 flex justify-center items-center w-[200px] h-[200px] sm:w-[700px] sm:h-[700px] overflow-hidden rounded-full">
          <img src={binitImage} alt="Binit Kumar Jha" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
