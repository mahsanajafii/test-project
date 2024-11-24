
import  FormComponent  from "./components/formComponent/FormComponent";


const Home: React.FC=()=> {  
    

  return (  
    <main className="flex flex-col gap-8 row-start-2 items-center justify-center">  
      <h2 className="mt-3 text-4xl">Click!</h2> 
      <FormComponent/>
    </main>  
  );    
}
export default  Home