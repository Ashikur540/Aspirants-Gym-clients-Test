import {RiMailLine} from 'react-icons/ri'
import {IoCallOutline} from 'react-icons/io5'
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlineTwitter} from 'react-icons/ai'
import {TiWiFi} from 'react-icons/ti'
import {TfiGoogle} from 'react-icons/tfi'
import {FaFacebookF} from 'react-icons/fa'
import '../../src/css/header.css'


const Header = () => {
    return (
        <>
            <div className="bg-more2 top_header">
                <div className="top_hd flex justify-between">
                    <div className="left_hd flex text-[#f5f5f2] gap-x-8">
                        <div className="flex">
                           <RiMailLine /> 
                        <a href="mailto:haduaur@email.com">haduaur@email.com</a>
                        </div>
                        <div className="flex">
                            <IoCallOutline />
                            <a href="callto:+98765432122">+98765432122</a>
                        </div>
                        <div className="flex">
                            <CiLocationOn />
                            <a href="">1711011 Ave Se Unit ARenton, WA 98058-5055</a>
                        </div>
                    </div>
                    <div className="right_hd text-[#f5f5f2] ">
                        <div className="flex gap-x-2">
                            <AiOutlineTwitter />
                            <FaFacebookF />
                            <TfiGoogle />
                            <TiWiFi />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;