import { motion } from "framer-motion";

import { useForm, SubmitHandler } from "react-hook-form";
import { PlusCircleIcon } from "@heroicons/react/solid";

type Inputs = {
  nama_sektor: string;
  pj_sektor: string;
};

export default function InputSektor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      fetch("http://localhost:3000/api/createSektor", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container max-w-screen-md mx-auto">
      <div className="text-3xl flex flex-row w-full place-items-center text-white mb-4   ">
        <PlusCircleIcon className="h-6 w-6 mr-2" />
        Tambah Sektor
      </div>
      <div className="text-white bg-gray-900 rounded-md px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 p-4 gap-y-3 "
        >
          <label htmlFor="nama_sektor" className="text-xl">
            Uraian Sektor
          </label>
          <input
            {...register("nama_sektor", { required: true })}
            type="text"
            id="nama_sektor"
            className={`rounded-md bg-gray-800 py-3 px-4 ${
              errors.nama_sektor
                ? "focus:ring-red-500 border-red-500"
                : "focus:ring-blue-500 focus:border-blue-500"
            }`}
          />
          <label htmlFor="pj_sektor" className="text-xl">
            Penanggung Jawab
          </label>
          <input
            {...register("pj_sektor", { required: true })}
            type="text"
            id="pj_sektor"
            className={`rounded-md bg-gray-800 py-3 mb-3 px-4 ${
              errors.pj_sektor
                ? "focus:ring-red-500 border-red-500"
                : "focus:ring-blue-500 focus:border-blue-500"
            }`}
          />

          <span className=" text-xl flex justify-center gap-x-3">
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.2 },
              }}
              type="submit"
              className="bg-sky-600 rounded-md py-1 px-4 text-base font-medium"
            >
              Simpan
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.2 },
              }}
              type="button"
              className="bg-rose-500 rounded-md py-1 px-4 text-base font-medium"
            >
              Batal
            </motion.button>
          </span>
        </form>
      </div>
    </section>
  );
}
