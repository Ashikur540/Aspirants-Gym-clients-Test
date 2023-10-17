import { useEffect } from 'react';
import '../../../../src/css/banner.css'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Banner = ()=> {
    useEffect(() =>{
        Aos.init({duration: 2000});
    },[])
    return (
        <div className="bg-more2">
            <div className="banner-section bg-[#1a1803] px-20">
           
           <div className="banner-content flex">
                <div className="banner_text uppercase text-[#f5f5f2]">
                    
                    <div className="">
                        <h5>BEST gym of city for fitness</h5>
                        </div>
                    <div className="font-bold shadow mt-5">
                        <h1 className="text-6xl get_text">train with best <br /> <span className="text-[#edfb13]"> gym experience</span> <br /> is hadkaur</h1>
                    </div>
                    <div className="mt-5">
                            <button className="btn-getStart uppercase bg-neutral-600 px-6 py-2">get started today + </button>
                    </div>
                </div>
                <div className="banner_image">
                    <div className="banner-img flex" data-aos="fade-left"
                     data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="2s">
                        <img src="/src/assets/banner.jpeg" alt="" />
                    </div>
                    
                </div>
            </div>
           </div>
        </div>
        
    );
};


export default Banner;