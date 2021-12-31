import { prisma } from "lib/prisma";

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: any, res: any) {
  try {
    const articles = await prisma.articles.findMany();
    res.status(200).json(articles);
  } catch (error) {
    res.status(400).json({
      message: `Something went wrong :/ ${error}`,
    });
  }
}
