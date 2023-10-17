import {BsCartDash} from 'react-icons/bs'
import{AiOutlineMenu} from 'react-icons/ai'
import '../../src/css/navber.css'
const Navbar = () => {
  return (
    <div className="navbar_hd bg-more2">
      <nav className="flex justify-between">
          <div className="menu-logo">
                <a href="https://flowbite.com/" className="flex">
                    <img
                    src="/src/assets/top-header.icon.jpg"
                    className="h-20 mr-3"
                    alt=""
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#f5f5f2]">
                    HADKAUR
                    </span>
                </a>
          </div>
            <div className="menu-text flex">
                <div className="left_menu flex justify-evenly gap-4">
                    <div className="menu_items text-[#f5f5f2] hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 ">
                        <li>
                            <a
                            href="#"
                            className="flex justify-between text-[#edfb13] py-2 pl-3 pr-4" 
                            aria-current="page"
                            >
                            <span className='home-line h-0 w-16 pt-3 pr-2'><hr className='bg-[#edfb13]' /></span> Home 
                            </a>
                            
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-2 pl-3 pr-4 text-[#f5f5f2] "
                            >
                            Classes
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-2 pl-3 pr-4 text-[#f5f5f2]"
                            >
                            Services
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-2 pl-3 pr-4 text-[#f5f5f2]"
                            >
                            Pricing
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-2 pl-3 pr-4 text-[#f5f5f2]"
                            >
                            Blog
                            </a>
                        </li>
                        <li>
                            <a
                            href="#"
                            className="block py-2 pl-3 pr-4 text-[#f5f5f2]"
                            >
                            Contact
                            </a>
                        </li>
                        </ul>
                    </div>

                        <div className="search_form">
                            <form>   
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
                                        <svg className="w-4 h-4 text-gray-500 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full text-center p-2 text-sm text-gray-900 border 
                                    border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
                                    dark:border-gray-600 dark:placeholder-gray-400"/>
                                    <button type="submit" className="text-gray-900 text-center absolute right-2.5 bottom-2.5 bg-[#edfb13]
                                    font-medium rounded-lg text-sm px-4">Search</button>
                                </div>
                            </form>

                        </div>
                        <div className="cart">
                                <span className="count">1</span>
                                <BsCartDash className='material-icons text-[#f5f5f2]'/>
                        </div>
                </div>
                <div className="menu-button pl-5">
                        <button
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="btn_submit bg-[#edfb13] inline-flex items-center justify-center text-sm text-gray-500"
                            aria-controls="navbar-default"
                            aria-expanded="false"
                        >
                            <AiOutlineMenu className='btn-icon'/>
                        </button>
                    </div>
            </div>
        
      </nav>
    </div>
  );
};

export default Navbar;
