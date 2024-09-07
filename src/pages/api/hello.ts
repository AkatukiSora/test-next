import { NextApiRequest, NextApiResponse } from "next";

type HelloResponse = {
    name: string
}

export default (_req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
    res.status(200).json({name: "John Doe"})
}