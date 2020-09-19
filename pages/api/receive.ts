import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.headers);
  console.log(req.body);

  res.statusCode = 200;
  res.json({ success: true });
};
