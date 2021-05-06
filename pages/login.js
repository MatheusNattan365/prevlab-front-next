import React from "react";
import Head from "next/head";
import { Grid } from "@material-ui/core";
import Login from "../components/Login";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PrevLab </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid container direction="row" justify="center" alignItems="stretch">
          <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
            <Login />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <About />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
