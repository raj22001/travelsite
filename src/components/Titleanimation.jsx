
import { useEffect  , useState} from 'react';
import Travel from '../components/Travel';

const Titleanimation = () => {

    const [showOtherComponent, setShowOtherComponent] = useState(false);


  useEffect(() =>{

    const timout = setTimeout(() =>{
      setShowOtherComponent(true)
    } , 1200)

    return () => clearTimeout(timout)

  },[])

  return (
    <div className='w-[100%] h-[100vh] grid place-items-center bg-slate-50 box-border overflow-hidden '>
    {
      showOtherComponent ? (<Travel/> ) : (
        <div className='w-[55%] h-[600px] bg-cover border border-black shadow-full flex items-center justify-center bg-hero-pattern bg-clip-text'>
            <span id='scalingText' className='text-7xl font-black text-transparent scaleEffect'>
              Travel Exploration
            </span>
          </div>
      ) 
    }
  </div>
  )
}

export default Titleanimation
