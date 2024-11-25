'use client';

import Link from "next/link";

 
 const FormComponent: React.FC= () => {
    const handleClick = (color: string) => {  
        localStorage.setItem("backgroundColor",color);
      };
  return (
    <form  className="flex justify-between gap-4">  
    
      <Link href="/secendPage" passHref>  
        <button  onClick={() => handleClick("yellow")} className="bg-yellow-300 text-lg text-black w-20 rounded-xl h-10 font-bold hover:text-white   shadow-yellow-50 shadow-inner ">  
          Yellow  
        </button>  
      </Link>  
      
    
      <Link href="/secendPage" passHref>  
        <button  onClick={() => handleClick("blue")}  className="bg-blue-300 text-lg text-black w-20 rounded-xl h-10 font-bold hover:text-white   shadow-blue-50 shadow-inner">  
          Blue  
        </button>  
      </Link>  
      
    
      <Link href="/secendPage" passHref>  
        <button  onClick={() => handleClick("red")}  className="bg-red-300 text-lg text-black w-20 rounded-xl h-10 font-bold hover:text-white   shadow-red-50 shadow-inner ">  
          Red  
        </button>  
      </Link>  
      
  </form>   )
}
export default FormComponent