import { Link } from 'react-router-dom';


export function BunpouWarrior() {
    return (
        <div class="flex flex-col items-center justify-center min-h-screen">
            <Link to="/bunpou-study">
                <h1 className="gametitle">Bunpou Study</h1>
            </Link>
            <Link to="/bunpou-test">
                <h1 className="gametitle">Bunpou Test</h1>
            </Link>
        </div>
    )
}


export default BunpouWarrior;
