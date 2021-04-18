import React from "react";
import Head from "next/head";

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
        <div className={`flex `}>
          <div className="flex-auto">
            <About />
          </div>
          <div className="flex-auto">
            <Login />
          </div>
        </div>
      </main>
    </div>
  );
}
