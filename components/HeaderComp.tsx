import { ShareIcon } from "@heroicons/react/solid";

function HeaderComp() {
  return (
    <section className=" container mx-auto px-4">
      <div className=" text-white  bg-gray-700  rounded-md  h-20 px-4 text-3xl mb-8 font-bold flex flex-row place-items-center">
        <ShareIcon className="h-7 w-7 mr-3" fill="none" stroke="currentColor" />
        <div className="text-blue-200 hover:text-blue-300">
          Agenda Prioritas Pengawasan
        </div>
        <div className=" font-normal ml-2 ">- 2022</div>
      </div>
    </section>
  );
}

export default HeaderComp;
