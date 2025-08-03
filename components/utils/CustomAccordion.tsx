import { useState } from "react";
import  {Button} from "@heroui/react";


export default function  AccordionView({title, children}:{title:string, children:React.ReactNode})  {
 return (<div className={'my-4'}>
  <details>
  <summary role="button">{title}</summary>
  {children}
</details>
</div>
 );
};

/*
 function  OriginalAccordionView()  {
 const [open, setOpen] = useState(false);


 return (
     <div className="w-full">
     <input
       id="expandCollapse"
       checked={open}
       type="checkbox"
       className="peer "
       onChange={null}
     />
     <label
       htmlFor="expandCollapse"
       className={"w-full flex justify-center items-center bg-blue-100 hover:bg-[#444] transition-colors duration-1000 ease-in-out"}
       onClick={() => setOpen(!open)}
     >
       {open ? "Less information" : "More information"}
      
     </label>
     <div
       className={
          "overflow-hidden h-0 bg-slate-300 peer-checked:h-[200px] peer-checked:overflow-scroll transition-[height] duration-1000 ease-in-out "}
     >
       <p className="text-black">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. [...]
       </p>
     </div>
   </div>
 );
};
*/