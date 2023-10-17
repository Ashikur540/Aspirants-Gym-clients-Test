import img1 from '../../../assets/image1.png'



const HomeAboutUs = () => {
    return (
        <div className="lg:px-24  px-6 bg-[#000000] pb-12 text-[#fff] ">

            <div>
                <h1 className="uppercase text-center text-7xl font-semibold -mb-10 text-[#262322] bg-opacity-25 pt-6">about us</h1>
            </div>

            <h1 className="text-center text-3xl font-bold uppercase text-white  ">The perfect place <br /> for your fitness goal </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12 items-center pb-8">
                <div className="lg:-mt-20 lg:ml-40">
                    <img src={img1} alt="" className="lg:w-[200px] w-full lg:h-[270px] rounded-tr-3xl" />

                </div>

                <div>
                    <h3 className="text-2xl uppercase font-semibold text-white py-2">Best from the beginingg</h3>
                    <h1 className="text-[#edfb13] text-center  uppercase font-bold border-[2px] rounded-sm border-[#505505] text-3xl ">journey 2003-2023</h1>
                    <p className="text-[16px] pt-10 pb-6 text-[#808080]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolorem minus aliquam quaerat qui! Fuga iusto culpa cum magnam unde? Ducimus eum minus sint ab consectetur ad nemo labore voluptate?</p>

                    <div className="flex gap-6 items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoc2dfOA8-Z15bh_VObe6uZa94B9OaC38Cg&usqp=CAU" className="rounded-full h-[45px] w-[45px]" alt="" />
                        <div>
                            <p className="uppercase text-white text-[11px] font-semibold py-1">Fitenss coach</p>
                            <h4 className="uppercase text-white font-bold text-[2xl]">Steven Smith</h4>

                        </div>
                    </div>
                </div>



                <div >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPDWpdd7L-M44R1IJDo-cDnmoTgJb1q2ofg&usqp=CAU" alt="" className="lg:w-[200px] w-full lg:h-[270px] rounded-br-3xl" />
                </div>
            </div>
            <div className="flex justify-between text-center">
                <div className="grid grid-cols-">
                    <div className="bg-gradient-to-r from-[#575615]  px-16 py-36 rounded-r-full">

                    </div>
                </div>
                <div className=" py- text-center absolute">
                    <h1 className=" py-5  uppercase relative pl-12 lg:text-[180px] text-[60px] font-bold outline-4">F <span className="px-[1px]">i</span> t <span className="px-[1px] border-">n</span>  e <span className="px-[1px]">s</span>  s</h1>
                </div>
                <div className="grid grid-cols- ">
                    <div className="bg-gradient-to-l from-[#575615]  px-16 py-36 rounded-l-full">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutUs;