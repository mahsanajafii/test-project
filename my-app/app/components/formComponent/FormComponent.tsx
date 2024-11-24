'use client';
import Link from "next/link";  
import { Button, Form } from "antd"; 
 
 const FormComponent: React.FC= () => {
    const handleClick = (color: string) => {  
        localStorage.setItem("backgroundColor",color);
      };
  return (
    <Form layout="vertical" className="flex justify-between gap-4">  
    <Form.Item >  
      <Link href="/secendPage" passHref>  
        <Button type="primary" shape="round" onClick={() => handleClick("yellow")} className="bg-yellow-300 text-lg text-black w-20">  
          Yellow  
        </Button>  
      </Link>  
    </Form.Item>  
    <Form.Item>  
      <Link href="/secendPage" passHref>  
        <Button type="primary" shape="round" onClick={() => handleClick("blue")}  className="bg-blue-300 text-lg text-black w-20">  
          Blue  
        </Button>  
      </Link>  
    </Form.Item>  
    <Form.Item>  
      <Link href="/secendPage" passHref>  
        <Button type="primary" shape="round" onClick={() => handleClick("red")}  className="bg-red-300 text-lg text-black w-20">  
          Red  
        </Button>  
      </Link>  
    </Form.Item>  
  </Form>   )
}
export default FormComponent