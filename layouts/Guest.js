import Head from "next/head";

export default function Guest({ title, header, cardClassName, children }) {
  return (
    <div className="flex antialiased tracking-tight text-gray-800 items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`${cardClassName ? cardClassName : "w-1/3"}`}>
        <div className=" bg-white shadow-sm overflow-hidden rounded-2xl">
          <div className="px-6 py-3 capitalize border-b font-medium ">
            <h1>{header}</h1>
          </div>
          <div className="px-6 py-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
