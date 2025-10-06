import NavBar from "../components/navbar";
import { Test } from "../components/test";
const HomePage = () => (
    <>
        <div className="flex flex-col h-screen">
            <NavBar />
            <Test />
        </div>
    </>
);

export default HomePage;
