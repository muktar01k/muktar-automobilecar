// import { useState } from "react"
import Camry from '../assets/IMAGE/camry.png'
import Car from '../assets/IMAGE/Carup.png'
import Bmw from '../assets/IMAGE/Bmw.png'
import Leave from '../assets/IMAGE/leave.png'
import Acc from '../assets/IMAGE/acc.png'
import Ewe from '../assets/IMAGE/ewe.png'
import Jeep3 from '../assets/IMAGE/jeep3.png'
import Jeep4 from '../assets/IMAGE/jeep4.png'
import Jeep5 from '../assets/IMAGE/jeep5.png'
import Jeep1 from '../assets/IMAGE/jeep1.png'
// import { Link } from "react-router-dom"



// export const Header = ({ text1, text2, text3, text4 }) => {
//     const [Togglemodal, setTogglemodal] = useState(false)

//     function Signup() {
//         setTogglemodal(!Togglemodal)
//     }
//     return (

       


//     )


export const CamryCars = ({ header1, tagsP1, tagsP2, btn, btn2 }) => {
    return (
        <div className=" mt-[5rem] sm:flex flex-col sm:static ">
            <div className="w-[29rem]  mt-[7rem] sm:w-[25rem] sm:mt-[8rem]">
                <h2 className='text-2xl font-semibold sm:text-7xl sm:ml-[5rem]'>{header1}</h2>
                <p className='text-[grey] sm:ml-[5rem] sm:text-2xl sm:mt-[0.5rem]'>{tagsP1}</p>
                <p className='text-[grey] pt-[2rem] sm:w-[25rem] sm:ml-[1rem]'>{tagsP2}</p>
                <div className="sm:flex sm:justify-center ">
                    <button className='bg-[purple] text-[white] mt-[7rem] w-[8rem] h-[3rem] rounded-xl'>{btn}</button>
                    <button className='bg-[purple]  text-[white] mt-[7rem] w-[8rem]  ml-[2rem] h-[3rem] rounded-xl'>{btn2}</button>
                </div>
            </div>

            <div className="w-[30rem] mt-[2rem] sm:w-[25rem] sm:mr-[3rem]">
                <img src={Camry} alt="" />
            </div>
        </div>
    )
}

export const About = ({ About1, About2, About3 }) => {
    return (
        <div className=" ml-[5rem] mt-[3rem] flex justify-center sm:flex sm:flex-col sm:mt-[3rem] sm:ml-[1rem]">
            <img className='w-[35rem]' src={Car} alt="" />

            <div className="w-[25rem] ]">
                <h1 className='text-xl font-semibold sm:ml-[10rem]'>{About1}</h1>
                <p className='text-[grey] pt-[2rem] sm:w-[25rem]'>{About2}</p>
                <button className='bg-[purple] text-[white] mt-[3rem] w-[8rem] h-[3rem] rounded-xl sm:ml-[9rem]'>{About3}</button>
                <img className='pt-[2rem] sm:ml-[2rem] sm:w-[20rem]' src={Bmw} alt="" />
            </div>
        </div>
    )
}

export const Section = ({ header4, ptag4, header5, ptag5, header6, ptag6 }) => {
    return (
        <div className="flex justify-center gap-[0.1rem] mt-[2rem]  sm:gap-[1rem]">
            <div className="bg-[white] w-[19rem] pt-[3rem] rounded-xl">
                <h4 className='text-[purple] font-bold pl-[1rem]'>{header4}</h4>
                <p className='text-[grey] pl-[1rem]'>{ptag4}</p>
                <img className='pt-[2rem]' src={Leave} alt="" />
            </div>
            <div className="bg-[grey] w-[19rem] pt-[3rem] rounded-xl sm:hidden sm:w-[15rem] ">
                <h4 className='text-[purple] font-bold pl-[1rem] '>{header5}</h4>
                <p className='text-slate-600 pl-[1rem]'>{ptag5}</p>
                <img className='pt-[2rem]' src={Acc} alt="" />
            </div>
            <div className="bg-slate-300 w-[19rem] pt-[3rem] rounded-xl  ">
                <h4 className='text-[purple] font-bold pl-[1rem]'>{header6}</h4>
                <p className='text-slate-600 pl-[1rem]'>{ptag6}</p>
                <img className='pt-[2rem]' src={Ewe} alt="" />
            </div>
        </div>
    )
}

export const ImgJeep = ({ }) => {

    return (
        <div className="">
            <div className="flex  sm:ml[1rem]">
                <img className='w-[150px] h-[10.5rem] sm:hidden' src={Jeep1} alt="" />
                <div className="">
                    <img className='w-[150px] h-[10.5rem] sm:w-[130px] sm:h-[9rem] sm:ml-[2rem] ' src={Jeep3} alt="" />
                </div>
            </div>
            <div className="mt-[3rem]">
                <div className="flex gap-2">
                    <img className='w-[150px] h-[10.5rem]   sm:w-[130px] sm:h-[9rem] sm:ml-[2rem] ' src={Jeep4} alt="" />
                    <div className="">
                        <img className='w-[150px] h-[10.5rem]  sm:hidden' src={Jeep5} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}