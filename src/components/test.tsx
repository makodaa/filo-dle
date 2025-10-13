import { Link } from "react-router-dom";

export const Test = () => {
    return (
        <>
            <div className="flex flex-col grow">
                <Link to="/filofood" className="m-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">Filipino Food</h2>
                <p className="font-normal text-gray-500 ">This game category is solely focused on Filipino food.</p>
                </Link>
            </div>
        </>
    );
};
//TODO: rename this file to Card.tsx. To indicate that this is a card component. Use props to make this reusable for other game categories (ARBOR).