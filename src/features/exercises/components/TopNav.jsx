
import { BiSearch, BiTask, BiBell } from "react-icons/bi"
const TopNav = ({pageTitle}) => {
    return (
        <>
            <div className="p-10">


                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-medium">{pageTitle}</h1>
                    <div className="flex justify-center items-center gap-3">
                        <button className="primary-button">upgrade</button>
                        <button className="text-border_dark ">
                            <BiSearch size={28} />
                        </button>
                        <button className="text-border_dark ">
                            <BiTask size={28} />
                        </button>
                        <button className="text-border_dark ">
                            <BiBell size={28} />
                        </button>



                    </div>
                </div>

            </div>
        </>
    );
};

export default TopNav;