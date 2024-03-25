import Banner from "./Banner"
import Banner_chitiet from "./Chitiet/Banner_chitiet"
import Main_chitiet from "./Chitiet/Main_chitiet"
import Footer from "./Footer"
import Header from "./Header"


const Chitiet = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <Header />
            {/* <Banner_chitiet /> <br /> */}
            <Banner /><br />
            <Main_chitiet />
            <Footer />
        </div>
    )
}

export default Chitiet