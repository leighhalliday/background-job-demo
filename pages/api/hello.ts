import { NextApiRequest, NextApiResponse } from "next";
import { Repeater } from "repeaterdev-js";

const repeater = new Repeater(process.env.REPEATER_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const name = req.query.name || "Unknown";

  try {
    const job = await repeater.enqueue({
      name: "hello",
      endpoint: `${process.env.PUBLIC_URL}/api/receive`,
      verb: "POST",
      json: { hello: name },
    });
    console.log(job);
  } catch (error) {
    console.error(error);
  }

  res.statusCode = 200;
  res.json({ name });
};
