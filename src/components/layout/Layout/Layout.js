import Header from "../Header/Header";
import NavBar from "../Header/Navbar";
import Carousel from "../Carousel/Carousel"
import SiteContant from "../SiteContant/SiteContant";
import Footer from "../Footer/Footer";
export default function Layout() {
    return <div className="container">
        <Header />
        <NavBar />
        <Carousel />
        <SiteContant />
        <Footer />
    </div>;
}