import Button from "components/Button";
import { ReactElement } from "react";
import App from "layouts/App";

export default function Index() {
  return (
    <div className="max-w-xl">
      <div className="overflow-hidden bg-white border shadow-sm rounded-xl">
        <header className="border-b px-4 py-2.5 bg-gray-50/50 flex items-center justify-between ">
          <div>
            <h1 className="font-medium">Card Title</h1>
            <span className="text-gray-500">Lorem ipsum dolor sit amet </span>
          </div>

          <Button
            onClick={() => console.log("hello")}
            className="bg-cyan-500 hover:bg-cyan-700 focus:ring-cyan-300 focus:bg-cyan-600"
          >
            Tess 2
          </Button>
        </header>
        <section className="px-4 py-2.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          recusandae est perferendis maiores placeat voluptates fuga ipsum, quam
          eum architecto velit amet iste delectus magni esse doloribus expedita
          repudiandae a.
        </section>
        <footer className="border-t px-4 py-2.5 text-gray-500 bg-gray-50/50">
          footer
        </footer>
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <App title="Home">{page}</App>;
};
