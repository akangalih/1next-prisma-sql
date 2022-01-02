import { prisma } from "lib/prisma";

export default async function handler(req: any, res: any) {
  try {
    const sektors = await prisma.sektor.findMany({
      select: {
        id: true,
        nama_sektor: true,
        info: {
          select: {
            id: true,
            info_sektor: true,
          },
        },
        pj_sektor: true,
        tw: {
          select: {
            id: true,
            tw: true,
          },
        },
      },
    });
    res.status(200).json(sektors);
  } catch (error) {
    res.status(400).json({
      message: `Something went wrong :/ ${error}`,
    });
  }
}
