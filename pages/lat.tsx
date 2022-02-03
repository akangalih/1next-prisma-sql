import { ReactElement } from "react";
import App from "layouts/App";
import Image from "next/image";
import {
  CalendarIcon,
  ChevronUpIcon,
  InformationCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { Disclosure, Transition } from "@headlessui/react";

export default function Index() {
  return (
    <div className="space-y-8">
      <div className="grid p-6 overflow-hidden bg-white shadow rounded-xl gap-y-1">
        <div className="self-center text-center">
          <div className="text-4xl font-bold text-emerald-700 ">
            Agenda Prioritas Pengawasan
          </div>
          <div className="text-xl text-emerald-700">Tahun 2022</div>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-4">
        <div className="flex overflow-auto transition duration-300 ease-in-out delay-150 scale-95 bg-white rounded-lg shadow-lg h-fit hover:-translate-y-1 hover:scale-100 flex-rows">
          <div className="relative flex-none w-32 bg-red-50">
            <Image
              src="/img/SDM.jpg"
              alt=""
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
          <div className="w-full p-4">
            <div className="pb-2 mb-2 space-y-2 border-b">
              <div className="flex flex-wrap text-lg">
                <div className="flex-auto font-bold text-emerald-900">
                  Reformasi Pembangunan SDM
                </div>
                <div className="flex flex-row items-center font-normal text-gray-400">
                  <CalendarIcon className="h-4" />{" "}
                  <div className="ml-1">Triwulan 1</div>
                </div>
              </div>
              <div className="flex flex-row items-center text-base font-light text-gray-500">
                <UserGroupIcon className="h-4 text-gray-500" />{" "}
                <div className="ml-1">
                  Deputi Bidang Perekonomian dan Kemaritiman
                </div>
              </div>
            </div>
            <div className="mb-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex flex-wrap items-center justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg flexjustify-between text-emerald-900 bg-emerald-50 hover:bg-emerald-100 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-75">
                      <span className="flex flex-row items-center">
                        <InformationCircleIcon className="h-4" />{" "}
                        <div className="ml-1">Informasi Hasi Pengawasan</div>
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-emerald-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-900 ease-out"
                      enterFrom="transform scale-80 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-80 opacity-0"
                    >
                      <Disclosure.Panel className="pb-2 text-sm text-gray-500 ">
                        <ul className="pt-2 list-disc px-9">
                          <li>
                            Analisis atas desain kebijakan pemerintah terkait
                            reformasi pembangunan SDM
                          </li>
                          <li>
                            Potret alokasi anggaran pemerintah pusat untuk
                            peningkatan kualitas SDM
                          </li>
                          <li>
                            Potret sebaran IPM regional dibandingkan dengan
                            alokasi belanja daerah per kapita untuk pembangunan
                            SDM
                          </li>
                          <li>
                            Analisis atas peningkatan akses dan kualitas sektor
                            pendidikan dan kesehatan (ringkasan dari klaster 1
                            dan 2)
                          </li>
                          <li>
                            Analisis atas peningkatan kualitas dan jangkauan
                            perlindungan sosial untuk masyarakat rentan
                            (ringkasan dari klaster 3)
                          </li>
                          <li>
                            Rekomendasi peningkatan kualitas belanja pembangunan
                            SDM
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
        <div className="flex overflow-auto scale-95 bg-white rounded-lg shadow-lg h-fit hover:-translate-y-1 hover:scale-100 flex-rows">
          <div className="relative flex-none w-32 bg-red-50">
            <Image
              src="/img/SDM.jpg"
              alt=""
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
          <div className="w-full p-4">
            <div className="pb-2 mb-2 border-b">
              <div className="flex flex-wrap text-lg">
                <div className="flex-auto font-bold">
                  Reformasi Pembangunan SDM2
                </div>
                <div className="font-normal">Tw1</div>
              </div>
              <div className="flex flex-row items-center text-base font-light text-gray-500">
                <UserGroupIcon className="h-4 text-emerald-500" />{" "}
                <div className="ml-1">
                  Deputi Bidang Perekonomian dan Kemaritiman
                </div>
              </div>
            </div>
            <div className="mb-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg text-emerald-900 bg-emerald-100 hover:bg-emerald-200 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-75">
                      <span>Informasi Hasi Pengawasan</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-emerald-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-500 ease-out"
                      enterFrom="transform scale-80 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-80 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        - Analisis atas desain kebijakan pemerintah terkait
                        reformasi pembangunan SDM - Potret alokasi anggaran
                        pemerintah pusat untuk peningkatan kualitas SDM - Potret
                        sebaran IPM regional dibandingkan dengan alokasi belanja
                        daerah per kapita untuk pembangunan SDM - Analisis atas
                        peningkatan akses dan kualitas sektor pendidikan dan
                        kesehatan (ringkasan dari klaster 1 dan 2) - Analisis
                        atas peningkatan kualitas dan jangkauan perlindungan
                        sosial untuk masyarakat rentan (ringkasan dari klaster
                        3) - Rekomendasi peningkatan kualitas belanja
                        pembangunan SDM
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="p-2 text-sm font-normal bg-green-200 rounded-lg max-w-fit">
              Triwulan 1
            </div>
          </div>
        </div>
        <div className="flex h-48 overflow-auto transition duration-300 ease-in-out delay-150 bg-white rounded-lg shadow-lg hover:-translate-y-2 hover:scale-90 flex-rows">
          <div className="relative flex-none w-32 bg-red-50">
            <Image
              src="/img/SDM.jpg"
              alt=""
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
          <div className="p-4 text-xl font-semibold">
            Penguatan Infrastruktur dan Konektivitas
          </div>
        </div>
        <div className="flex h-48 overflow-auto transition duration-300 ease-in-out delay-150 bg-white rounded-lg shadow-lg hover:-translate-y-2 hover:scale-90 flex-rows">
          <div className="relative flex-none w-32 bg-red-50">
            <Image
              src="/img/SDM.jpg"
              alt=""
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
          <div className="p-4 text-xl font-semibold">
            Akuntabilitas Keuangan Negara dan Daerah
          </div>
        </div>
        <div className="flex h-48 overflow-auto transition duration-300 ease-in-out delay-150 bg-white rounded-lg shadow-lg hover:-translate-y-2 hover:scale-90 flex-rows">
          <div className="relative flex-none w-32 bg-red-50">
            <Image
              src="/img/SDM.jpg"
              alt=""
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
          <div className="p-4 text-xl font-semibold">Pemulihan Ekonomi</div>
        </div>
        <div className="flex h-48 overflow-auto transition duration-300 ease-in-out delay-150 bg-white rounded-lg shadow-lg hover:-translate-y-2 hover:scale-90 flex-rows">
          <div className="relative flex-none w-32 bg-red-50">
            <Image
              src="/img/SDM.jpg"
              alt=""
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
          <div className="p-4 text-xl font-semibold">Pemulihan Ekonomi</div>
        </div>
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <App title="APP">{page}</App>;
};
