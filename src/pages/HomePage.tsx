import NavBar from "../components/navbar";
import { Test } from "../components/test";
import Footer from "../components/footer";

const HomePage = () => (
        <div className="flex flex-col h-screen">
            <NavBar />
            <Test/>
            <Footer />
        </div>

);

export default HomePage;
