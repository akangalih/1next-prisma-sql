import Head from "next/head";
import Image from "next/image";
export default function App({ title, children }) {
  return (
    <div
      className="flex justify-center min-h-screen antialiased tracking-tight text-gray-800 bg-gradient-to-br from-neutral-50 to-emerald-100 "
    >
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full p-20 ">
        <div className="flex gap-2 mb-10">
          <Image alt="" src={"/img/bpkp.svg"} width={60} height={17} />
          <div className="text-gray-500">
            Badan Pengawasan Keuangan dan Pembangunan
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
