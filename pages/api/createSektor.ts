import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { nama_sektor, pj_sektor } = req.body;
  try {
    const createsektor = await prisma.sektor.create({
      data: {
        nama_sektor: nama_sektor,
        pj_sektor: pj_sektor,
      },
    });
    res.status(200).json(createsektor);
  } catch (error) {
    res.status(400).json({
      message: `Something went wrong :/ ${error}`,
    });
  }
}
