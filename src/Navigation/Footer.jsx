const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className="sticky top-full">
            <div className="py-8 text-center border-t-4 border-[#d2691e] bg-[#212529] text-[#d2691e]">
                <p className="font-semibold">Windfall Technologies &copy; {year} </p>
            </div>
        </div>
    )
}

export default Footer;