import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const { message } = props

    return <div>
        <Head>
            <title>SSR</title>
            <link rel="/favicon.ico"/>
        </Head>
        <main>
            <p>
                このーページはSSRで描画されています
            </p>
            <p>
                {message}
            </p>
        </main>
    </div>
}
export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
    const message = `${new Date().toLocaleString()}に描画されました`
    return {
        props: {
            message,
        },
    }

}

export default SSR