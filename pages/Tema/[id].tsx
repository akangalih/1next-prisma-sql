import Head from "next/head";
import { GetServerSideProps } from "next";
import { prisma } from "lib/prisma";

export default function Home({ topik, tema, sektor }) {
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
        <title>Topik APP</title>
        <meta name="Topik APP" content="APP2022" />
      </Head>
      <section className="text-white">
        <div className="container mx-auto max-w-screen-lg px-4">
          <h1 className="text-3xl mb-2 font-medium tracking-wide text-white">
            <span className="text-gray-400 font-light">Sektor: </span>
            {sektor.nama_sektor}
          </h1>
          <h1 className="text-3xl mb-2 font-medium tracking-wide text-white">
            <span className="text-gray-400 font-light">Tema: </span>

            {tema.nama_tema}
          </h1>
          <h2 className="text-2xl mb-5 font-medium tracking-wide text-white">
            <span className="text-gray-400 font-light">Penanggung Jawab: </span>
            {tema.pj_tema}
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
                    Uraian Topik
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
                {topik.map(function (p, idx) {
                  return (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-white">
                        {p.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {p.nama_topik}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-white">
                        {p.info.map(function (x, idy) {
                          return <div key={idy}>&bull; {x.info_topik}</div>;
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-white">
                        {p.pj_topik}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-white">
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
  const res = await prisma.topik.findMany({
    where: {
      id_tema: Number(params.id),
    },
    include: {
      sektor: true,
      tema: true,
      tw: true,
      info: true,
    },
  });
  const res2 = await prisma.tema.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  const res3 = await prisma.sektor.findFirst({
    where: {
      id: res2.id_sektor,
    },
  });
  const sektor = JSON.parse(JSON.stringify(res3));
  const tema = JSON.parse(JSON.stringify(res2));
  const topik = JSON.parse(JSON.stringify(res));

  return {
    props: { topik, tema, sektor },
  };
};
