import Random from "./components/Random"
import Tag  from "./components/Tag"
export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
        <h1 className=" absolute bg-white rounded-lg text-center  w-11/12 mt-[40px] mx-auto text-4xl font-bold py-2 px-10 ">RANDOM GIFS</h1>
        <div className="flex flex-col mt-32 w-full items-center gap-y-10">
          <Random/>
          <Tag/>
        </div>
    </div>
  )
}
