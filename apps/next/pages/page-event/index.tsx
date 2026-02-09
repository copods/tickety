import Head from "next/head";

import { Navbar } from "@tickety/app/components/composite";

export default function Page() {
  return (
    <>
      <Head>
        <title>Events - Tickety</title>
        <meta
          name="description"
          content="Explore and book tickets for the best events in your city"
        />
      </Head>
      <Navbar />
    </>
  );
}
