import { NextPage } from "next";
import Head from "next/head"
import Link from "next/link";
import style_text from "@style/text.module.css"
import { ReactNode } from "react";

type RenderLink = {
    link: string
    children: ReactNode
}

const RenderLink:NextPage<RenderLink> = (prop) => {
    return <Link href={prop.link}>
        {prop.children}
    </Link>
}

const TestPage: NextPage = () => {
    return <div>
        <Head>
            <title>Link test</title>
            <link rel="ico" href="/favicon.ico"/>
        </Head>
        <main className={style_text.root_box}>
            <div>
                <p>Linkのテストです</p>
                
                <RenderLink link="/ssg">ssg</RenderLink>
                <br/>
                <Link href="/ssr">ssr</Link>
            </div>
        </main>
    </div>
}


export default TestPage