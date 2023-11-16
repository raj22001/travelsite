import { useEffect  , useState} from 'react';
import './App.css';
import nature from "./assets/images/nature.jpg";
import Titleanimation from './components/titleanimation';
import { SiYourtraveldottv } from "react-icons/si";


function App() {

  const [showOtherComponent, setShowOtherComponent] = useState(false);


  useEffect(() =>{

    const timout = setTimeout(() =>{
      setShowOtherComponent(true)
    } , 1400)

    return () => clearTimeout(timout)

  },[])
  
  return (
    <div>
    <div className='w-[100%] h-[100vh] grid place-items-center bg-slate-50 box-border  overflow-hidden  cursor-none '>
      {
        showOtherComponent ? (<Titleanimation/> ) : (
          <div className='w-[100%] h-[100vh] grid place-items-center relative z-30 '>
        <div className='w-[55%] h-[600px] bg-cover relative shadow-full'>
          <img src={nature}  alt=""  className='w-full h-full object-cover' />
            <div className='absolute inset-0 flex items-end justify-center '>
              <div className='w-[25%] h-[100px] mb-16'>

              <h1 className='relative text-blue-100 text-4xl -mt-4 mb-6 font-title font-bold'>This is nature </h1>
              
              <p className='line-clamp-3 font-mono text-center text-blue-300 text-xl'>Rivers are made of freshwater, meaning they have little to no salt. They carry and distribute important salts and nutrients to support plant and animal life. </p>
              </div>
            </div>
          <h1  className='text-center flex justify-center text-4xl mt-14 font-semibold font-serif items-center'><span className='m-2'><SiYourtraveldottv/></span> Raj Mahajan</h1>
        </div>
    </div>
        ) 
      }
    </div>
      </div>
  );
}

export default App;
