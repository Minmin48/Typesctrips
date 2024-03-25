import { Link } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
const Thanks = () => {
    return (
        <div>
            <Header />
            <div className="bg-cover bg-center h-screen">
                <img src="./Banner1.jpg" alt="" className="w-full h-full" />
                <div className="bg-gray-200">
                    <div className=" items-center h-screen absolute ml-96 left-48 top-48">
                        <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110">
                            <img src="https://picsum.photos/id/237/200/200" alt="Thank You Image" className="mx-auto mb-6 rounded-full" />
                            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Thanks for your submission!</h1>
                            <p className="text-gray-600">Khách Hàng là thượng đế, An toàn của Khách Hàng đặt lên hàng đầu. Nhà xe TDM xin chân thành cảm ơn quý khách</p>
                            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"><Link to="/">Back to Home</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Thanks