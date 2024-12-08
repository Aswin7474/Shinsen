import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export function Availablegames() {

    return (
        <div class="flex flex-col items-center justify-center min-h-screen">
            <Link to="/kana-warrior">
                <h1 className="gametitle">Kana Warrior</h1>
            </Link>
            <Link to="/kanji-warrior">
                <h1 className="gametitle">Kanji Warrior</h1>
            </Link>
            <Link to="/bunpou-warrior">
                <h1 className="gametitle">Bunpou Warrior</h1>
            </Link>
        </div>
    )
}

export default Availablegames;
