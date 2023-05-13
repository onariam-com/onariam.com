import Image from "next/image";


export function Header() {
    return <div className="flex justify-start p-5">
        <Image
      src='/../../public/logo2.png'
      width={50}
      height={50}
      alt="Picture of the author"
    />

     
     <ul className="px-10 flex items-center  gap-10 flex-grow font-semibold ">
            <li className="cursor-pointer">Platform</li>
            <li className="cursor-pointer">Documentation</li>
            <li className="cursor-pointer">About</li>
        </ul>
<button class="   rounded-full  px-5 font-semibold text-white bg-slate-950">
  Launch
</button>
    </div> 
    ;
  }
