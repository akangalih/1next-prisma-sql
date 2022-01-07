import { prisma } from "lib/prisma";

export default async function handler(req: any, res: any) {
  try {
    const temas = await prisma.tema.findMany({
      include: {
        sektor: true,
        tw: true,
        info: true,
      },
    });
    res.status(200).json(temas);
  } catch (error) {
    res.status(400).json({
      message: `Something went wrong :/ ${error}`,
    });
  }
}
