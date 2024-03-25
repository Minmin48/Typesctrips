
const Header_button = () => {
    return (
        <div className="flex justify-center">
            <button className="mx-2">
                <a className="inline-block rounded px-7 py-2 border border-slate-300 text-sm bg-white font-medium text-zinc-950 hover:bg-[#366D91] hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="#">
                    Hotline 24/7
                </a>
            </button>
            <button className="mx-2">
                <a className="inline-block rounded px-7 py-2 border border-slate-300 text-sm bg-white font-medium text-zinc-950 hover:bg-[#366D91] hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="#">
                    Đăng nhập
                </a>
            </button>
        </div>
    )
}

export default Header_button