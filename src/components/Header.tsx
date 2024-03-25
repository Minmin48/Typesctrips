import { Link } from "react-router-dom"
import Header_button from "./Header/Header_button"
import Header_menu from "./Header/Header_menu"

const Header = () => {
    return (
        <div>
            <header>
                <div className="flex justify-between items-center bg-[#2474E5] py-4 px-5">
                    <Link to="/"><img src="./Logo.png" width={100} /></Link>
                    <div className="flex items-center">
                        <Header_menu />
                        <div className="ml-20">
                            <Header_button />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header