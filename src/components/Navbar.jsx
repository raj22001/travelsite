import {AiOutlineClose } from "react-icons/ai"

import {navdata} from "../data/dats"


const Navbar = ({showHandler}) => {

    
  return (
        <div className="flex w-full h-[60px] items-center  justify-evenly bg-green-700  rounded-tl-none rounded-tr-none rounded-br-[60%] rounded-bl-[60%]">
            <div className="text-start">
                <h1>Raj Mahajan</h1>
            </div>

                <div  className="absolute">
                    <AiOutlineClose size={25} className="transition-all duration-150"  onClick={showHandler}/>
                </div>

                <div className="pl-6 ">

                    {navdata.map((item) => (
                        <button
                        key={item.id}
                        className="ml-[25px]"
                    >
                            {item.name}
                        </button>
                    ))}
                </div>
        </div>
  )
}

export default Navbar
