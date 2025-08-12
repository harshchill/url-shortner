import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-md flex justify-center gap-4 mx-auto mt-20 ">
        <div className="left text-center w-1/2 bg-red-200">
          <h1 className="text-3xl font-bold text-blue-600">
            <span className="text-blue-800">URL</span>Short
          </h1>
        </div>
        <div className="right w-1/2 bg-green-200"><Image >
          </Image></div>
      </div>
    </>
  );
}
