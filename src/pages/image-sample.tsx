import { NextPage } from "next";
import Image from "next/image"
import img_circle from "@pub/img/circle.png"

const ImageSample: NextPage<void> = () => {
    return <div>
        <h1>画像表示の比較</h1>
        <p>通常</p>
        <img src="/img/circle.png" height="400" width="400" alt="image"/>
        <p>Imageコンポーネント</p>
        <Image src={img_circle} height={400} width={400} alt="image" placeholder="blur"/>
    </div>
}
export default ImageSample