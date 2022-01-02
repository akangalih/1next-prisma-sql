import Head from "next/head";
import { prisma } from "lib/prisma";
import { text } from "stream/consumers";
import { type } from "os";
// import { GetServerSideProps } from "next";
// import { articles } from ".prisma/client";

export default function Home({ sektors }) {
  function textColor(s) {
    switch (s) {
      case 1:
        return "bg-green-500 text-green-800";
      case 2:
        return "bg-cyan-500 text-cyan-800";
      case 3:
        return "bg-yellow-500 text-yellow-800";
      case 4:
        return "bg-red-500 text-red-800";
    }
  }
  return (
    <div>
      <Head>
        <title>APP</title>
        <meta name="APP" content="APP2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-white">
        <div className="container mx-auto max-w-screen-lg px-4">
          <h1 className="text-3xl mb-5 font-medium tracking-wide text-white">
            Sektor
          </h1>
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
                    Uraian Sektor
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
                {sektors.map(function (p, idx) {
                  return (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-white">
                        {p.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {p.nama_sektor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-white">
                        {p.info.map(function (x, idy) {
                          return <div key={idy}>&bull; {x.info_sektor}</div>;
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-white">
                        {p.pj_sektor}
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

export const getServerSideProps = async () => {
  const res = await prisma.sektor.findMany({
    include: {
      info: {
        select: {
          id: true,
          info_sektor: true,
        },
      },
      tw: {
        select: {
          id: true,
          tw: true,
        },
      },
    },
  });
  const sektors = JSON.parse(JSON.stringify(res));
  console.log(sektors);
  return {
    props: { sektors },
  };
};
