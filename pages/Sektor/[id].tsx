import Head from "next/head";
import { GetServerSideProps } from "next";
import { prisma } from "lib/prisma";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function Home({ tema, sektor }) {
  function textColor(s) {
    switch (s) {
      case "TW1":
        return "bg-green-500 text-green-800";
      case "TW2":
        return "bg-cyan-500 text-cyan-800";
      case "TW3":
        return "bg-yellow-500 text-yellow-800";
      case "TW4":
        return "bg-red-500 text-red-800";
    }
  }
  return (
    <div>
      <Head>
        <title>Tema APP</title>
        <meta name="Tema APP" content="APP2022" />
      </Head>
      <section className="text-white">
        <div className="container mx-auto max-w-screen-lg px-4">
          <h1 className="text-3xl mb-2 font-medium tracking-wide text-white">
            <span className="text-gray-400 font-light">Sektor: </span>
            {sektor.nama_sektor}
          </h1>
          <h2 className="text-2xl mb-5 font-medium tracking-wide text-white">
            <span className="text-gray-400 font-light">Penanggung Jawab: </span>
            {sektor.pj_sektor}
          </h2>
          <div className="shadow overflow-hidden border-b border-gray-800 rounded-lg">
            <table className="min-w-full divide-y divide-gray-800 ">
              <thead className="bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Uraian Tema
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    Informasi Hasil Pengawasan
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    PJ
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  >
                    TW Pelaporan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-700 divide-y divide-gray-500">
                {tema.map(function (p, idx) {
                  return (
                    <tr key={idx}>
                      <td className="px-6 py-4  text-sm  text-white">{p.id}</td>
                      <td className="px-6 py-4  text-sm font-medium text-white">
                        <Link href={`/Tema/${p.id}`} passHref>
                          <span className="flex flex-row hover:text-emerald-400 items-center hover:cursor-pointer">
                            {p.nama_tema}
                            <ExternalLinkIcon className="h-4 ml-2 align-middle text-green-400" />
                          </span>
                        </Link>
                      </td>
                      <td className="px-6 py-4 max-h-30 w-2/5  text-sm font-normal text-white">
                        {p.info.map(function (x, idy) {
                          return <div key={idy}>&bull; {x.info_tema}</div>;
                        })}
                      </td>
                      <td className="px-6 py-4  text-sm font-normal text-white">
                        {p.pj_tema}
                      </td>
                      <td className="px-6 py-4  text-sm font-normal text-white">
                        {p.tw.map(function (z, tw) {
                          return (
                            <div
                              key={tw}
                              className={`flex-shrink-0 inline-block px-2 py-0.5 text-xs mr-2 font-medium rounded-full ${textColor(
                                z.tw
                              )}`}
                            >
                              {z.tw}
                            </div>
                          );
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

type sektor = {
  id: number;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await prisma.tema.findMany({
    where: {
      id_sektor: Number(params.id),
    },
    include: {
      sektor: true,
      tw: true,
      info: true,
    },
  });
  const res2 = await prisma.sektor.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  const sektor = JSON.parse(JSON.stringify(res2));
  const tema = JSON.parse(JSON.stringify(res));

  return {
    props: { tema, sektor },
  };
};
