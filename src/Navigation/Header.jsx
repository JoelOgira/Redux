import { Link } from "react-router-dom";
import { FiAlignRight } from 'react-icons/fi';
import { useState } from "react";

const Header = () => {
    const [ isHidden, setIsHidden ] = useState(true);
    const handleHidden = () => {
        setIsHidden(!isHidden);
    }

    return (
        <div className="top-0 py-8 px-6 w-full bg-[#212529]  border-b-4 border-[#d2691e] md:px-8">
            <div className="flex flex-row space-x-10 justify-between container mx-auto text-white lg:w-4/6">
                <div>
                    < Link to='/windfall' className="font-semibold text-lg hover:border-b-2 border-[#d2691e]">
                        <span className="text-[#d2691e]">Windfall </span>Technologies
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
                        null
                        :
                        <div className="flex flex-col justify-end items-end pt-4 pr-[0.125rem] space-y-3 sm:hidden">
                            <Link to="/">
                                Home
                            </Link>
                            <Link to="/posts">
                                Posts
                            </Link>
                            <Link to="/todo">
                                Todo
                            </Link>
                            <Link to="/counter">
                                Counter
                            </Link>
                        </div>
                    }

                    <div className="hidden sm:flex sm:items-center sm:space-x-5 sm:space-y-0 sm:flex-row">
                        <Link to="/" className="hover:text-[#d2691e]">
                            Home
                        </Link>
                        <Link to="/posts" className="hover:text-[#d2691e]">
                            Posts
                        </Link>
                        <Link to="/todo" className="hover:text-[#d2691e]">
                            Todo
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