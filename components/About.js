import React from "react";

// import { Container } from './styles';

function About() {
  return (
    <div className="flex flex-col py-12 bg-green-600 box-border h-full ">
      <div className=" flex-1 flex  flex-col justify-center   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sel">
        <h2 className="text-7xl text-white font-semibold tracking-wide ">
          Prev<span className="text-7xl  font-thin">Lab</span>
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-green-800 sm:text-4xl">
          Laboratório de Análises Clínicas
        </p>
        <p className="mt-4 max-w-2xl text-xl text-green-300 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam. Lorem ipsum
          dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
          cupiditate veritatis in accusamus quisquam. Lorem ipsum dolor sit amet
          consect adipisicing elit. Possimus magnam voluptatum cupiditate
          veritatis in accusamus quisquam. Lorem ipsum dolor sit amet consect
          adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam. Lorem ipsum dolor sit amet consect adipisicing
          elit. Possimus magnam voluptatum cupiditate veritatis in accusamus
          quisquam.
        </p>
      </div>

      <div className="flex-none px-8 border border-dashed border-green-500">
        <h2 className=" text-green-300 text-right">
          Developed by{"  "}
          <a
            href="https://www.linkedin.com/in/devmatheusnattan/"
            target="_blanck"
            className=" text-green-900 font-bold text-right ml-1"
          >
            Matheus Nattan
          </a>
        </h2>
      </div>
    </div>
  );
}

export default About;
