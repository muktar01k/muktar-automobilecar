import Camry from '../assets/IMAGE/camry.png'
import Logos from '../assets/IMAGE/Logos.png'
import Car from '../assets/IMAGE/Carup.png'
import Bmw from '../assets/IMAGE/Bmw.png'
import Leave from '../assets/IMAGE/leave.png'
import Acc from '../assets/IMAGE/acc.png'
import Ewe from '../assets/IMAGE/ewe.png'
import Jeep1 from '../assets/IMAGE/jeep1.png'
import Jeep2 from '../assets/IMAGE/jeep2.png'
import Jeep3 from '../assets/IMAGE/jeep3.png'
import Jeep4 from '../assets/IMAGE/jeep4.png'
import Jeep5 from '../assets/IMAGE/jeep5.png'
import Jeep7 from '../assets/IMAGE/jeep7.png'
import Benz from '../assets/IMAGE/benz.png'
import Gwagon from '../assets/IMAGE/G-wagon.png'
import Party from '../assets/IMAGE/party.png'
import White from '../assets/IMAGE/white.jpg'
import Toyota from '../assets/IMAGE/Toyota.png'
import ToyoJeep from '../assets/IMAGE/Toyojeep.png'
import Audi from '../assets/IMAGE/audi.png'
import BMJeep from '../assets/IMAGE/BMjeep.png'
import BenzCar from '../assets/IMAGE/Benzcar.png'
import Cardilac from '../assets/IMAGE/Cardilac.png'
import Line from '../assets/IMAGE/line.png'
import Stars from '../assets/IMAGE/Stars.svg'
import Rightbg from '../assets/IMAGE/rightbg.png'
import Back from '../assets/IMAGE/backtop.png'
import Social from '../assets/IMAGE/social.png'
import Number from '../assets/IMAGE/number.png'
import Contact from '../assets/IMAGE/contact.png'
import Location from '../assets/IMAGE/location.png'
import { useState } from 'react'


const Home = () => {

    const [Togglemodal, setTogglemodal] = useState(false)

    function Signup() {
        setTogglemodal(!Togglemodal)
    }


    return (
        <div className="bg-[whitesmoke]">
            <div className="bg-Background bg-no-repeat bg-right h-[70rem]  ">
                <nav className="flex justify-center h-[3rem] pt-[1.5rem] sm:gap-[20rem] ">
                    <h1 className="font-semibold ">Muktar<sub>autos</sub></h1>
                    <div className="">
                        <ul className="flex  sm:flex flex-col sm:gap-[1rem] ">
                            <li>Buy</li>
                            <li>Sell</li>
                            <li>Service & Repair</li>
                            <li> contact</li>
                            <div onClick={Signup} className="">
                                <button className=" bg-[purple] w-[6rem] rounded-xl h-[2rem]">Sign in</button>
                            </div>
                        </ul>
                    </div>
                </nav>
                {
                    Togglemodal && (
                        <div className="w-full fixed top-0 flex backdrop-blur-md h-full justify-center">
                            <div className="bg-[white] shadow-2xl w-[50rem] h-[30rem] rounded-md mt-[9rem]">
                                <p className='text-3xl font-bold text-center pt-[1rem] text-[purple]'>Create account</p>

                                <form className='ml-[3rem]  mt-[2rem]' action="">
                                    <div className="flex gap-[3rem]">
                                        <div className="">
                                            <p className='font-semibold text-[purple]'>First Name</p>
                                            <input className='bg-[whitesmoke] w-[20rem] h-[3rem] rounded-lg border-4 border-purple-500' type="text" placeholder='First Name...' />
                                        </div>
                                        <div className="">
                                            <p className='font-semibold text-[purple]'>Last Name</p>
                                            <input className='bg-[whitesmoke] w-[20rem] h-[3rem] rounded-lg border-4 border-purple-500' type="text" placeholder='Last Name...' />
                                        </div>
                                    </div>

                                    <div className="mt-[2rem]">
                                        <p className='font-semibold text-[purple]'>Email Address</p>
                                        <input className='bg-[whitesmoke] w-[40rem] h-[3rem] rounded-lg border-4 border-purple-500 ' type="text" placeholder='Email Address...' />
                                    </div>

                                </form>
                            </div>
                        </div>
                    )
                }
                <div className="flex mt-[5rem] sm:flex flex-col ">
                    <div className="w-[29rem] ml-[7rem] mt-[7rem] sm:w-[25rem] sm:mt-[8rem]">
                        <h2 className='text-2xl font-semibold sm:text-7xl sm:ml-[7rem]'>Muktar</h2>
                        <p className='text-[grey] sm:ml-[7rem] sm:text-2xl sm:mt-[0.5rem]'>Car Buying Made Easy!</p>
                        <p className='text-[grey] pt-[2rem] sm:w-[30rem] sm:mr-[5rem]'>Muktar has the best auto deals for their customers and aslo the best car for you, search by car,compare prices and find the perfect car for you,no matter what you budget</p>
                        <div className="sm:flex sm:justify-center">
                            <button className='bg-[purple] text-[white] mt-[7rem] w-[8rem] h-[3rem] rounded-xl'> Get started</button>
                            <button className='bg-[purple]  text-[white] mt-[7rem] w-[8rem]  ml-[2rem] h-[3rem] rounded-xl'>Explore More</button>
                        </div>
                    </div>
                    <div className="w-[40rem] mt-[2rem] sm:w-[35rem] sm:ml-[2rem]">
                        <img src={Camry} alt="" />
                    </div>
                </div>
                <div className="w-[40rem] ml-[20rem]  sm:w-[30rem] sm:ml-[4rem]">
                    <img src={Logos} alt="" />
                </div>
            </div>
            <div className=" ml-[5rem] mt-[3rem] flex justify-center sm:flex sm:flex-col sm:mt-[9rem] sm:ml-[2rem]">
                <img className='w-[35rem]' src={Car} alt="" />

                <div className="w-[25rem] ]">
                    <h1 className='text-xl font-semibold sm:ml-[13rem]'>About Us</h1>
                    <p className='text-[grey] pt-[2rem] sm:w-[38rem]'>Muktar has the best auto deals for their customers and also the best car for you.Search by car,Compare prices and find the perfect car for you.no matter what your budget</p>
                    <button className='bg-[purple] text-[white] mt-[3rem] w-[8rem] h-[3rem] rounded-xl sm:ml-[15rem]'>Contact us</button>
                    <img className='pt-[2rem] sm:ml-[6rem]' src={Bmw} alt="" />
                </div>
            </div>
            <div className="text-center mt-[3rem] ">
                <h3 className='text-xl text-[purple] '>Why buy from Muktar auto ?</h3>
                <p className='text-[grey]'>peace of mind, every step of the way</p>
            </div>
            <div className="flex justify-center gap-[0.1rem] mt-[2rem]">
                <div className="bg-[white] w-[19rem] pt-[3rem] rounded-xl">
                    <h4 className='text-[purple] font-bold pl-[1rem]'>PAY THE RIGHT PRICE</h4>
                    <p className='text-[grey] pl-[1rem]'>We make it easy for you to find a great deal by showing you how the price compares to similar cars on the market.</p>
                    <img className='pt-[2rem]' src={Leave} alt="" />
                </div>
                <div className="bg-[grey] w-[19rem] pt-[3rem] rounded-xl">
                    <h4 className='text-[purple] font-bold pl-[1rem]'>FREE HISTORY CHECKS</h4>
                    <p className='text-slate-600 pl-[1rem]'>Every car has passed a free basic history check,we'll never advertise a car that's recorded as stolen,scrapped or written off beyound repair.</p>
                    <img className='pt-[2rem]' src={Acc} alt="" />
                </div>
                <div className="bg-slate-300 w-[19rem] pt-[3rem] rounded-xl ">
                    <h4 className='text-[purple] font-bold pl-[1rem]'>SELLERS YOU CAN TRUST</h4>
                    <p className='text-slate-600 pl-[1rem]'>Read dealer reviews from like-minded car buyers so you can feel confident you're buying from someone you trust.</p>
                    <img className='pt-[2rem]' src={Ewe} alt="" />
                </div>
            </div>
            <p className='text-[grey] ml-[35rem] mt-[5rem] sm:ml-[3rem]'>Muktar the best auto deals for their customers and also the best car for you.</p>
            <div className="flex gap-2 justify-center mt-[1rem] ">
                <div className="">
                    <div className="flex gap-2 sm:ml[1rem]">
                        <img className='w-[150px] h-[10.5rem] sm:w-[110px]' src={Jeep1} alt="" />
                        <div className="">
                            <img className='w-[150px] h-[10.5rem] sm:w-[110px]' src={Jeep3} alt="" />
                        </div>
                    </div>
                    <div className="mt-[3rem]">
                        <div className="flex gap-2">
                            <img className='w-[150px] h-[10.5rem] sm:w-[110px]' src={Jeep4} alt="" />
                            <div className="">
                                <img className='w-[150px] h-[10.5rem] sm:w-[110px]' src={Jeep5} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="">
                    <div className="">
                        <img className='w-[350px] h-[300px] sm:w-[300px] sm:h-[250px]' src={Jeep2} alt="" />
                    </div>
                    <div className="mt-[1rem]">
                        <img className='w-[360px]' src={Jeep7} alt="" />
                    </div>
                </div>

            </div>
            <div className="text-[grey] text-center mt-[1rem]">
                <p>Muktar has the best auto deals for their</p>
                <p>customers and also the best car for you</p>
            </div>
            <button className='bg-[purple] text-[white] mt-[3rem] w-[8rem] h-[3rem] rounded-xl ml-[10rem] sm:ml-[15rem]'>Buy now</button>
            <div className="flex object-left ">
                <div className="ml-[15rem] mt-[5rem] sm:ml-[10rem] ">
                    <p className='text-[grey] w-[17rem]'>Get a free,instant valuation so you know exactly how much you can put towards your next car.</p>
                    <div className="mt-[3rem] pl-[3rem] ">
                        <img className='w-[15rem]' src={Benz} alt="" />
                    </div>

                </div>
                <div className="">
                    <img className='w-[20rem]' src={Gwagon} alt="" />
                    <button className='bg-[purple] text-[white] mt-[3rem] w-[8rem] h-[3rem] rounded-xl ml-[3rem]'>value my car</button>
                </div>
            </div>
            <div className="">
                <div className="flex  justify-center">
                    <div className=" w-[35rem] h-[14rem] rounded-sm mt-[2rem]">
                        <img className='w-[20rem] h-[14rem] ml-[20rem] sm:hidden ' src={White} alt="" />
                        <div className="mt-[1rem] ">
                            <p className='text-[purple] font-bold pl-[8.5rem]'>SAVE TIME RESEARCHING</p>
                            <p className='text-[grey] w-[35rem] pl-[8.5rem]'>Narrow down your options with help from our experts.They review all makes and models to help you find the right car.</p>

                        </div>
                        <button className='bg-[purple] text-[white] mt-[3rem] ml-[8.5rem] w-[8rem] h-[3rem] rounded-xl'>Read Reviews</button>
                    </div>

                    <div className="mt-[5rem] ">
                        <img className='w-[30rem] h-[25rem] ' src={Party} alt="" />
                    </div>

                </div>

            </div>
            <p className='ml-[18rem] mt-[5rem] text-2xl'>Best deals for you</p>
            <div className="">
                <div className="grid grid-cols-3  m-[6rem]">
                    <div className="bg-[white] w-[20rem] h-[23rem] p-[2rem] rounded-sm">
                        <img className='w-[15rem] bg-[grey] ' src={Toyota} alt="" />
                        <p className='pl-[2rem] text-[grey]'>Toyota Camry 2021 white</p>
                        <div className="grid grid-cols-2 pt-[2rem]">
                            <p className='bg-[grey] w-[6rem]'>Foreign used</p>
                            <p className='bg-[grey] w-[6rem]'>340B0km</p>
                            <p className='bg-[grey] w-[6rem] mt-[1rem]'>N9,000,000</p>
                        </div>


                    </div>
                    <div className="bg-[white] w-[20rem] h-[23rem] ml-[2rem]  p-[2rem] rounded-sm">
                        <img className='w-[15rem] bg-[grey] ' src={Cardilac} alt="" />
                        <p className='pl-[2rem] text-[grey]'>Toyota Camry 2021 white</p>
                        <div className="grid grid-cols-2 pt-[2rem]">
                            <p className='bg-[grey] w-[6rem]'>Foreign used</p>
                            <p className='bg-[grey] w-[6rem]'>340B0km</p>
                            <p className='bg-[grey] w-[6rem] mt-[1rem]'>N9,000,000</p>
                        </div>
                    </div>
                    <div className="bg-[white] w-[20rem] h-[23rem] ml-[2rem] p-[2rem] rounded-sm">
                        <img className='w-[15rem] bg-[grey] ' src={BenzCar} alt="" />
                        <p className='pl-[2rem] text-[grey]'>Toyota Camry 2021 white</p>
                        <div className="grid grid-cols-2 pt-[2rem]">
                            <p className='bg-[grey] w-[6rem]'>Foreign used</p>
                            <p className='bg-[grey] w-[6rem]'>340B0km</p>
                            <p className='bg-[grey] w-[6rem] mt-[1rem]'>N9,000,000</p>
                        </div>

                    </div>
                    <button className='bg-[purple] text-[white] mt-[3rem] ml-[10rem] w-[8rem] h-[3rem] rounded-xl'>Read more</button>
                    <button className='bg-[purple] text-[white] mt-[3rem] ml-[10rem] w-[8rem] h-[3rem] rounded-xl'>Read more</button>
                    <button className='bg-[purple] text-[white] mt-[3rem] ml-[10rem] w-[8rem] h-[3rem] rounded-xl'>Read more</button>

                    <div className="bg-[white] w-[20rem] h-[20rem] ml-[4rem] mt-[3rem] p-[2rem] rounded-sm">
                        <img className='w-[15rem] bg-[grey] ml-[2rem]' src={BMJeep} alt="" />
                        <p className='pl-[2rem] text-[grey]'>Toyota Camry 2021 white</p>
                        <div className="grid grid-cols-2 pt-[2rem]">
                            <p className='bg-[grey] w-[6rem]'>Foreign used</p>
                            <p className='bg-[grey] w-[6rem]'>340B0km</p>
                            <p className='bg-[grey] w-[6rem] mt-[1rem]'>N9,000,000</p>
                        </div>
                    </div>
                    <div className="bg-[white] w-[20rem] h-[20rem] ml-[4rem] mt-[3rem] p-[2rem] rounded-sm">
                        <img className='w-[15rem] bg-[grey] ' src={Audi} alt="" />
                        <p className='pl-[2rem] text-[grey]'>Toyota Camry 2021 white</p>
                        <div className="grid grid-cols-2 pt-[2rem]">
                            <p className='bg-[grey] w-[6rem]'>Foreign used</p>
                            <p className='bg-[grey] w-[6rem]'>340B0km</p>
                            <p className='bg-[grey] w-[6rem] mt-[1rem]'>N9,000,000</p>
                        </div>
                    </div>
                    <div className="bg-[white] w-[20rem] h-[20rem] ml-[4rem] mt-[3rem] p-[2rem] rounded-sm">
                        <img className='w-[15rem] bg-[grey] ' src={ToyoJeep} alt="" />
                        <p className='pl-[2rem] text-[grey]'>Toyota Camry 2021 white</p>
                        <div className="grid grid-cols-2 pt-[2rem]">
                            <p className='bg-[grey] w-[6rem]'>Foreign used</p>
                            <p className='bg-[grey] w-[6rem]'>340B0km</p>
                            <p className='bg-[grey] w-[6rem] mt-[1rem]'>N9,000,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex">
                    <div className="bg-Rectangle bg-no-repeat h-[20rem]  p-[5rem] ml-[2rem]">
                        <p className='w-[9rem] text-2xl text-[grey]'>What our customer say</p>
                        <p className='text-[grey] w-[20rem] pt-[5rem]'>Muktar has the best auto deals for their customers and also and the best car for you.</p>
                    </div>
                    <img className='ml-[6rem] h-[31.438rem] w-[1.063]' src={Line} alt="" />
                    <div>
                        <div className="bg-Emoji bg-no-repeat ml-[12rem] h-[10rem]">
                            <p className='w-[27rem] pl-[6rem] pt-[1rem]'>Afohams has the best auto deal for their customers and also the best car for you.</p>
                            <img className='pl-[17rem]' src={Stars} alt="" />
                        </div>
                        <div className="bg-Emoji2 bg-no-repeat  ml-[5rem] h-[10rem]">
                            <p className='w-[27rem] pl-[6rem] pt-[1rem]'>Afohams has the best auto deal for their customers and also the best car for you.</p>
                            <img className='pl-[17rem]' src={Stars} alt="" />
                        </div>
                        <div className="bg-Emoji bg-no-repeat ml-[12rem] h-[10rem]">
                            <p className='w-[27rem] pl-[6rem] pt-[1rem]'>Afohams has the best auto deal for their customers and also the best car for you.</p>
                            <img className='pl-[17rem]' src={Stars} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[5rem] flex flex-col justify-center">
                <div className="relative">
                    <div className="bg-[white]  w-[72rem] h-[30.313rem] flex ml-[5rem]">
                        <img className='w-[29.875rem] h-[20.875rem]' src={Toyota} alt="" />
                        <div className='flex flex-col '>
                            <p className='w-[25rem] font-normal text-2xl pt-[7rem] text-[purple] pl-[2rem]'>Send me great muktar autos offers and the latest vechicle reviews.</p>
                            <div className="p-[2rem] flex">
                                <input className='bg-[#D9D9D9] h-[2rem] w-[25rem] mt-[0.5rem] pl-[1rem] rounded-sm' type="email" placeholder='enter your email...' />
                                <button className='bg-[purple] text-[white] ml-[1rem] w-[10rem] h-[3rem] rounded-xl'>Subscribe</button>
                            </div>
                            <p className='text-[grey] p-[2rem] w-[35rem] '>By signingup, you agreed to receive marketing emails in accordance with our privacy notice. You can unsubscribe at any time. </p>
                        </div>

                    </div>
                    <div >
                        <img className="absolute left-[60rem] top-[18rem] " src={Rightbg} alt="" />
                    </div>
                    <img className='mt-[7rem] ml-[40rem]' src={Back} alt="" />
                </div>

                <hr className='w-[70rem] text-xl mt-[3rem] ml-[7rem]' />

            </div>
            <div className="mt-[5rem]  ">
                <div className="bg-[white] w-full flex pt-[5rem] gap-[5rem]">
                    <div className="ml-[10rem] ">
                        <div className="flex">
                            <p className='text-[purple] font-bold text-6xl'>Muktar</p>
                            <p className='pt-[2.5rem] text-[purple]'>autos</p>
                        </div>
                        <div className="mt-[2rem]">
                            <p className='font-[bold] font-bold'>Powered by Afohams Investment</p>
                            <img className='pt-[2rem]' src={Social} alt="" />
                        </div>

                    </div>
                    <div className="ml-[3rem]">
                        <p className='text-[purple] font-bold'>Product</p>
                        <ul className='pt-[2rem] text-[grey] font-medium'>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Case studies</li>
                            <li>Reviews</li>
                            <li>Updates</li>
                        </ul>
                    </div>
                    <div className="">
                        <p className='text-[purple] font-bold'>Company</p>
                        <ul className='pt-[2rem] text-[grey] font-medium'>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Careers</li>
                            <li>Culture</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="">
                        <p className='text-[purple] font-bold'>Support</p>
                        <ul className='pt-[2rem] text-[grey] font-medium'>
                            <li>Getting started</li>
                            <li>Help center</li>
                            <li>Server status</li>
                            <li>Report a bug</li>
                            <li>Chat support</li>
                        </ul>
                    </div>
                    <div className="">
                        <p className='text-[purple] font-bold'>Contact us</p>
                        <div className="pt-[2rem]">
                            <img src={Contact} alt="" />
                            <img className='pt-[1rem]' src={Number} alt="" />
                            <img className='pt-[1rem]' src={Location} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default Home