const Jumbotron = () => {
    return (
        <div>
            <div id="jumbotron" className="flex flex-col justify-normal items-center w-full h-[400px] py-5 xl:items-end md:h-[500px]">
                <div className="flex flex-col space-y-5 justify-center items-center px-6 text-[#d2691e] lg:w-4/6">
                    <h1 className="text-center font-bold text-4xl">
                        Affordable Professional Web Design
                    </h1>
                    <p className="text-lg max-w-sm text-justify md:max-w-lg">
                        As our name suggests. we are the Acme professional and affordable web design. We develop meticular websites for various sites and company demands.
                    </p>
                </div>
            </div>

            <div className="w-full bg-[#212529] text-white">
                <div className="flex flex-col space-y-5 sm:flex-row container mx-auto px-8 sm:space-y-0 sm:space-x-12 lg:w-4/6 py-6">
                    <div className="flex flex-row justify-center items-center sm:w-2/6 sm:justify-start">
                        <p className="text-xl font-extrabold capitalize text-center">
                            Subscribe to our Newsletter
                        </p>
                    </div>
                    <div className="flex flex-row justify-end items-center sm:w-4/6">
                        <input
                            type="text"
                            className="rounded-l p-2 w-3/4 text-black focus:outline-none"
                            placeholder="Enter your email Address"
                        />
                        <button className="font-bold bg-[#d2691e] py-2 px-4 rounded-r hover:bg-orange-300" >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full container mx-auto lg:w-4/6">
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 px-8 py-12">
                    <div className="flex flex-col space-y-4 mb-6 justify-center items-center sm:mb-0">
                        <img src="../../public/images/html.png" alt="html logo" className="h-[150px] hover:-translate-y-1" />
                        <h3 className="font-extrabold text-xl">HTML 5</h3>
                        <p className="text-justify max-w-sm">
                            This is the day that the Lord has made. We will rejoice as the Days goes by. This is the day that the and we will rejoice always.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4 mb-6 justify-center items-center sm:mb-0">
                        <img src="../../public/images/css.jpg" alt="css logo" className="h-[150px] hover:-translate-y-1" />
                        <h3 className="font-extrabold text-xl">CSS 3</h3>
                        <p className="text-justify max-w-sm">
                            This is the day that the Lord has made. We will rejoice as the Days goes by. This is the day that the and we will rejoice always.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4 mb-6 justify-center items-center sm:mb-0">
                        <img src="../../public/images/bootstrap.jpg" alt="html logo" className="h-[150px] hover:-translate-y-1" />
                        <h3 className="font-extrabold text-xl">BOOTSTRAP 5</h3>
                        <p className="text-justify max-w-sm">
                            This is the day that the Lord has made. We will rejoice as the Days goes by. This is the day that the and we will rejoice always.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron