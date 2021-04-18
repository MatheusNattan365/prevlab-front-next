import React from "react";
import Head from "next/head";

import AdminLogin from "../../../components/admin/AdminLogin";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PrevLab Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={`flex`}>
          <div className="flex-auto">
            <AdminLogin />
          </div>
        </div>
      </main>
    </div>
  );
}
