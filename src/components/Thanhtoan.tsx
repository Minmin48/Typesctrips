import { Link } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Thanhtoan = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <Header />
            <img src="./Banner1.jpg" alt="" className="w-full h-96" /><br />
            <h1 className="flex justify-center font-bold text-3xl text-indigo-900">Thanh Toán</h1><br /><br />
            <div className="flex justify-center ml-16">
                <div className=" mx-auto max-w-[1200px] ">
                    <div>
                        <div className="bg-white h-10 p-4 rounded-lg " style={{ width: "370px", height: "445px" }}>
                            <h1 className="font-bold text-xl ">Thông Tin Liên Hệ</h1>
                            <div className="border h-16 mt-4  border-black-500 rounded-lg">
                                <p className="ml-2 text-sm">Tên người đi <span className="text-red-400">*</span></p>
                                <input className=" font-semibold mt-2 ml-2" type="text" placeholder="Nhập vào tên" />
                            </div>
                            <div className="flex gap-5">
                                <div className="border h-14 w-36 mt-4 border-black-500 rounded-lg">
                                    <p className="pt-4 font-semibold ml-6" >VN +84</p>
                                </div>
                                <div className="border h-14 mt-4 border-black-500 rounded-lg w-full">
                                    <p className="ml-2 text-sm">SĐT<span className="text-red-400">*</span></p>
                                    <input className="pt-1 font-semibold ml-2 border-0" type="text" placeholder="Nhập vào SĐT" />
                                </div>
                            </div>
                            <div className="border h-14 mt-4  border-black-500 rounded-lg">
                                <p className="ml-2 text-sm">Số lượng<span className="text-red-400">*</span></p>
                                <input className="pt-2 font-semibold ml-2" type="text" placeholder="Nhập vào số lượng người" />
                            </div>
                            <div className="border h-14 mt-4  border-black-500 rounded-lg">
                                <p className="ml-2 text-sm">Email<span className="text-red-400">*</span></p>
                                <input className="pt-2 font-semibold  ml-2" type="text" placeholder="Nhập vào Email" />
                            </div>
                            <div className="border h-14 mt-4  border-green-500 bg-green-50 rounded-lg flex gap-2">
                                <img src="./tichxanh.png" className="w-6 h-6 mt-4 ml-2" alt="" />
                                <p className="mt-2 ml-2 text-sm">Số điện thoại và email được sử dụng để thông tin đơn hàng và liên hệ khi cần thiết.</p>
                            </div>
                        </div>
                        <br />

                    </div>
                    <div>
                        <div className="bg-white p-4 rounded-lg flex gap-32" style={{ width: "366px", height: "70px" }}>
                            <h1 className="font-bold text-xl">Tạm Tính</h1>
                            <h1 className="flex gap-1 font-bold text-xl text-red-500"> 190.000đ <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mt-1 text-black"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg></h1>
                        </div>

                        <br />
                        <div className="bg-white p-4 rounded-lg " style={{ width: "366px", height: "35  0px" }}>
                            <h1 className="font-bold text-xl">Thông tin chuyến đi</h1>
                            <hr /><br />
                            <div className="relative flex ">
                                <img src="./chitiet.png" className="w-20 h-20" alt="Your image" />
                                <div>
                                    <h2 className="font-bold text-lg text-[#484848] ml-3">Hải Phòng Travel(Đất Cảng)</h2>
                                    <p className="ml-3 font-bold">Số Lượng: <span className="font-extralight">1 Người</span></p>
                                    <p className="ml-3 font-bold">Ngày đi: <span className="font-extralight"> 25-3-2024</span></p>
                                    <div className="flex mt-5">

                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <img src="./SVG.png" alt="" />
                                <div className="">
                                    <div className="flex">
                                        <h1 className="px-3 font-semibold text-[#484848] text-2xl">19:00 </h1>
                                        <div className="ml-48">
                                            <a href="#" className="text-gray-800 flex gap-2 pt-3 font-bold "> • <p className="font-semibold">Hà Nội</p></a>
                                        </div>
                                    </div>
                                    <span className="pl-3 text-gray-400 ">1h30m</span>
                                    <div className="flex">
                                        <h1 className="px-3 font-semibold text-gray-500 text-2xl">20:30 </h1>
                                        <div className="ml-40">
                                            <a href="#" className="text-gray-600 flex gap-2  font-bold "> • <p className="font-semibold">Hải Phòng</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-900 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500 mt-4 ml-28" href="#">
                                <span className="absolute -start-full transition-all group-hover:start-4">
                                    <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <span className="text-sm font-medium transition-all group-hover:ms-4"><Link to="/thanks">Thanh Toán</Link></span>
                            </a>
                        </div>
                    </div>
                </div >
                <div>
                    <img className="w-96 mt-[-30px] mr-80 hidden md:block" src="./hero-img.png" alt="" />
                    <img className="w-full h-96 mr-80 hidden md:block mt-8" src="./antoan.jpg" alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Thanhtoan