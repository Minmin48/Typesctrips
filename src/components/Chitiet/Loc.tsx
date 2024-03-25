import Li from "./Drops/Li"


const Loc = () => {
    return (
        <div >
            <div className="px-4 py-6">
                <span className="grid h-10 w-32 font-bold text-xl text-gray-900">
                    Lọc
                </span>
                <ul className="mt-6 space-y-1">
                    <Li title="Giờ Đi" />
                    <Li title="Nhà Xe" />
                    <Li title="Giá Vé" />
                    <Li title="Điểm Đón" />
                    <Li title="Điểm Chả" />
                    <Li title="Tiêu Chí Phổ Biến" />
                    <Li title="Vị Trí Ghế" />
                </ul>
            </div>
        </div>
    )
}

export default Loc