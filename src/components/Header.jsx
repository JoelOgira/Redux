import { Link } from "react-router-dom";
import { FiAlignRight } from 'react-icons/fi';
import { useState } from "react";

const Header = () => {
    const [ isHidden, setIsHidden ] = useState(true);
    const handleHidden = () => {
        setIsHidden(!isHidden);
    }

    return (
        <div className="top-0 py-8 w-full bg-[#212529]  border-b-4 border-[#d2691e]">
            <div className={` ${isHidden ? 'items-center' : 'items-start'} px-5 flex justify-between container mx-auto text-white lg:w-4/6`}>
                <div>
                    < Link to='/' className="flex justify-center items-center space-x-3 font-semibold text-xl">
                        <span className="text-[#d2691e]">Windfall </span> 
                        <span>Technologies</span>
                    </Link>
                </div>

                <div>
                    <div className="flex justify-center items-center">
                        <button
                            onClick={handleHidden}
                            className={`pl-16 sm:hidden`}
                        >
                            <FiAlignRight className="text-[#d2691e] text-3xl hover:text-white" />
                        </button>
                    </div>

                    {isHidden
                        ?
                        ""
                        :
                        <div className="flex flex-col justify-end items-end pt-4 pr-[0.125rem] space-y-3 sm:hidden">
                            <Link onClick={handleHidden} to="/">
                                Home
                            </Link>
                            <Link onClick={handleHidden} to="/post">
                                Post
                            </Link>
                            <Link onClick={handleHidden} to="/todo">
                                Todo
                            </Link>
                            <Link onClick={handleHidden} to="/counter">
                                Counter
                            </Link>
                        </div>
                    }

                    <div className="hidden sm:flex sm:justify-center sm:items-center sm:space-x-5 sm:space-y-0 sm:flex-row">
                        <Link to="/" className="hover:text-[#d2691e]">
                            Home
                        </Link>
                        <Link to="/post" className="hover:text-[#d2691e]">
                            Post
                        </Link>
                        <Link to="/users" className="hover:text-[#d2691e]">
                            Users
                        </Link>
                        <Link to="/counter" className="hover:text-[#d2691e]">
                            Counter
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;