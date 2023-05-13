import Image from "next/image";


export function Header() {
    return <div className="flex justify-start p-3 px-10 fixed w-full bg-white/75">
        <Image
      src="https://i.ibb.co/BGV802r/logo2.png"
      width={50}
      height={50}
      alt="Onariam"
    />

     
     <ul className="px-10 flex items-center  gap-10 flex-grow font-semibold ">
            <li className="cursor-pointer">Platform</li>
            <li className="cursor-pointer">Documentation</li>
            <li className="cursor-pointer">About</li>
        </ul>
<button class="   rounded-full  px-10 font-semibold text-white bg-slate-950">
  Join
</button>
    </div> 
    ;
  }
