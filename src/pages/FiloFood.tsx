import NavBar from "../components/navbar";
import Footer from "../components/footer";
const FiloFood = () =>{
    return(
        <>
            <div className="flex flex-col min-h-screen">
                <NavBar /> 
                <main className="flex-1">
                    <div className="flex items-center justify-center">
                        <h1>FiloFood</h1>
                    </div>
                </main>   
                <Footer />            
            </div>
            
        </>
    )
}

export default FiloFood;