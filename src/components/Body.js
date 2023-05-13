import Image from "next/image";
import social from "../../public/social.png"

export function Body(){
    return <div className=" h-screen flex justify-around items-center">
        <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="text-5xl font-bold ">Introducing <span className="text-7xl text-slate-900">Onariam</span></h1>
        <p className="font-bold text-2xl">A new way to communicate</p>
        </div>
        <div>
        <Image
      src={social}
      width={500}
      height={500}
      alt="Onariam"
    />
        </div>
        
    </div>
}