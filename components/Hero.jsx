import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="bg-black">
        <main>
          <div>
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-full" />
              <div className="max-w-7xl mx-auto sm:px-6">
                <div className="relative shadow-xl sm:overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      className="h-full w-400px object-cover"
                      src="/geneimage.png"
                      alt="Gene image"
                      layout="fill"
                    />
                    <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold  sm:text-5xl lg:text-6xl">
                      <span className="block text-white">Genetic Solutions, Lasting Cures</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-2xl text-white sm:max-w-3xl">
                    We specialize in treating hereditary disorders with unmet medical needs, offering hope and healing for a healthier future. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default Hero;