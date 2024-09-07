import { get } from "http"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from "next/head"

type SSGProps = {
    message: string
}

const SSG: NextPage<SSGProps> = (props) => {
    return <div>
        <Head>
            <title>SSG test</title>
            <link rel="/favicon.ico" />
        </Head>
        <main>
            <p>
                {props.message}
            </p>
        </main>
    </div>
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const message = `${new Date().toLocaleString()}に生成されました`
    return {
        props: {
            message,
        },
    }
}

export default SSG