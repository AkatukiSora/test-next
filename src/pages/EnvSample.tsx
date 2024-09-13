import { NextPage } from "next";
import Head from "next/head";
const EnvSample: NextPage = () => {
  console.log(`TEST:${process.env.TEST ?? "undefined"}`);
  console.log(
    `NEXT_PUBLIC_TEST:${process.env.NEXT_PUBLIC_TEST ?? "undefined"}`,
  );

  return (
    <div>
      <Head>
        <title>env test</title>
        <link rel="icon" href="/favcon.ico" />
      </Head>
      <main>
        <p>{process.env.TEST ?? "undefined"}</p>
        <p>{process.env.NEXT_PUBLIC_TEST ?? "undefined"}</p>
      </main>
    </div>
  );
};

export default EnvSample;
