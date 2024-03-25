import Sepxep_label from "./Drops/Sepxep.label"


const Sapxep = () => {
    return (
        <div className="hidden md:block">
            <div className="bg-white p-4 rounded-lg " style={{ width: "266px", height: "290px" }}>
                <h1 className="font-bold pb-2 ">Sắp Xếp</h1>
                <Sepxep_label title="Mặc định" />
                <Sepxep_label title="Giờ đi sớm nhất" />
                <Sepxep_label title="Giờ đi muộn nhất" />
                <Sepxep_label title="Đánh giá cao nhất" />
                <Sepxep_label title="Giá tăng dần" />
                <Sepxep_label title="Giá giảm dần" />
            </div>
        </div >
    )
}

export default Sapxep