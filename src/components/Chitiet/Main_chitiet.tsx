import Loc from "./Loc"
import Products from "./Products"
import Sapxep from "./Sapxep"

const Main_chitiet = () => {
    return (
        <div>
            <div className="flex gap-8 justify-start mx-auto max-w-[1200px] ">
                <div>
                    <Sapxep />
                    <br />
                    <div className="flex h-screen flex-col justify-between border-e bg-white rounded-lg ">
                        <Loc />
                        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                            <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                                <img alt="" src="./images.jpeg" className="size-10 rounded-full object-cover" />
                                <div>
                                    <p className="text-xs">
                                        <strong className="block font-medium">Admin</strong>
                                        <span>Đổi tài khoản</span>
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
                <div>
                    <Products />
                    <Products />
                    <Products />
                </div>
            </div >
        </div>
    )
}

export default Main_chitiet