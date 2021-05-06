import { Grid, Typography } from "@material-ui/core";
import React from "react";

// import { Container } from './styles';

function About() {
  return (
    <Grid
      container
      className="flex flex-col py-60 px-4 sm:px-6 lg:px-8 bg-green-600 box-border  "
    >
      <div className=" flex-1 flex  flex-col justify-center   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sel">
        <h2 className="text-7xl text-white font-semibold tracking-wide ">
          Prev<span className="text-7xl  font-thin">Lab</span>
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-green-800 sm:text-4xl">
          Laboratório de Citologia
        </p>

        <p className="mt-4 text-green-300  font-normal  max-w-2xl">
          Uma equipe especializada em auxiliar o rastreamento e detecção precoce
          de sinais do câncer no colo uterino através do exame de colpocitologia
          oncótica. Buscamos proporcionar auxílio diagnóstico com qualidade e
          eficácia na busca da satisfação dos nossos clientes e contribuindo
          para uma melhor qualidade da saúde da mulher.
        </p>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Grid item>
            <p className="mt-4 text-white  tracking-wide   font-semibold">
              Dra. Ana Karla.
            </p>
          </Grid>

          <Grid item>
            <p className=" text-white  tracking-wide   font-semibold">
              CRF-2611
            </p>
          </Grid>
        </Grid>

        <p className="text-white text-sm tracking-wide  justify-end font-light"></p>
      </div>

      <div className="flex-none mt-24 px-8 border border-dashed border-green-500">
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
    </Grid>
  );
}

export default About;
