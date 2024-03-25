import { Link } from "react-router-dom"


const Cart = () => {
    return (
        <div>
            <li className="item-carousel rounded max-w-[233px] overflow-hidden">
                <img src="./3.svg" alt="" className="min-w-full object-cover" />
                <div className="info-item-carousel text-white p-3 bg-[#9E947C] min-w-full">
                    <Link to="../Chitiet"><h3>Sài Gòn - Nha Trang</h3></Link>
                    <p className="mb-5">
                        Từ <span className="px-1">200.000đ</span><span className="text-gray-300 text-opacity-60 line-through">250.000đ</span>
                    </p>
                    <div>
                        <a className="bg-yellow-300 ml-8 inline-block rounded border border-black px-12 py-3 text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-black" href="./Chitiet">
                            Chi Tiết
                        </a>
                    </div>
                </div>
            </li >
        </div >
    )
}

export default Cart