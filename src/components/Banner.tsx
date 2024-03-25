import Banner_input from "./Banner/Banner_input"
import Banner_menu from "./Banner/Banner_menu"

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="h-screen relative rounded-lg" style={{ maxHeight: 412 }}>
                    <img src="./banner.png" alt="" className="min-h-full" />
                    <div className="body__banner absolute -translate-y-1/2 -translate-x-1/2 start-2/4 top-2/4">
                        <h2 className="text-[26px] text-white text-center mb-[22px]">
                            <a href="">Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</a>
                        </h2>
                        <Banner_input />
                    </div>
                    <Banner_menu />
                </div>
            </div>

        </div>
    )
}

export default Banner