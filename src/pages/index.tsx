import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import style_text from "@style/text.module.css";

const TestPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Link test</title>
        <link rel="ico" href="/favicon.ico" />
      </Head>
      <main className={style_text.root_box}>
        <div>
          <p>Linkのテストです</p>

          <Link href="/ssg">ssg</Link>
          <br />
          <Link href="/ssr">ssr</Link>
          <br />
          <Link href="/sayhello">sayhello</Link>
        </div>
      </main>
    </div>
  );
};

export default TestPage;
