import { Link } from "react-router-dom";

export function Homepage() {
    
    return (
            <div className="flex flex-col items-end justify-center min-h-screen text-3xl">
                <div className="relative right-10 bottom-3 p-48 m-10">
                    <h1 className="m-1">Master Japanese With</h1>
                    <h1 className="m-1">Fun and Interactive</h1>
                    <h1 className="m-1">Games</h1>
                    <Link to="/games">
                        <button class="px-3 py-1  bg-gradient-to-r from-[#f5b7b1] to-[#FAF3B1] text-white font-bold rounded-lg shadow-lg hover:from-[#f5b7b1] hover:to-[#FAF3F3] transform hover:scale-105 transition duration-300">
                            Start Learning Now
                        </button>
                    </Link>
                    <Link to="/howitworks">
                        <button class="px-1 py-0.5 m-2 bg-gradient-to-r from-[#f5b7b1] to-[#FAF3B1] text-white font-bold rounded-lg shadow-lg hover:from-[#f5b7b1] hover:to-[#FAF3F3] transform hover:scale-105 transition duration-300">
                            How it works
                        </button>
                    </Link>
                </div>
            </div>
    )
}

export default Homepage;
