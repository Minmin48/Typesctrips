

const Cart3 = () => {
    return (
        <div className="hidden md:block">
            <li className="item-carousel rounded max-w-[233px] overflow-hidden">
                <img src="./5.svg" alt="" className="min-w-full object-cover" />
                <div className="info-item-carousel text-white p-3 bg-[#C6324E] min-w-full">
                    <h3>Sài Gòn - Đà Lạt</h3>
                    <p className="mb-5">
                        Từ <span className="px-1">200.000đ</span><span className="text-gray-300 text-opacity-60 line-through" />
                    </p>
                    <div>
                        <a className="bg-yellow-300 ml-8 inline-block rounded border border-black px-12 py-3 text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-black" href="./Chitiet">
                            Chi Tiết
                        </a>
                    </div>
                </div>

            </li>
        </div>
    )
}

export default Cart3