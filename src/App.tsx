import {Routes, Route} from "react-router-dom";
import FiloFood from "./pages/FiloFood";;
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/filofood" element={<FiloFood />} />
        </Routes>
    );
}

export default App;
