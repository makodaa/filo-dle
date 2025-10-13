import { Link} from "react-router-dom";

const NavBar = () => (
    <>
        <div className="flex-col shrink justify-between p-3 mb-0.5 border-b-2">
            <div className="flex flex-row shrink">
                <Link to="/">
                    <h1>Filo-dle</h1>
                </Link>
            </div>
            <div className="flex flex-grow"></div>
        </div>
    </>
);

export default NavBar;
