import { prisma } from "lib/prisma";

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: any, res: any) {
  const { title, body } = req.body;

  try {
    const article = await prisma.articles.create({
      data: {
        title,
        body,
      },
    });
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({
      message: `Something went wrong :/ ${error}`,
    });
  }
}

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
