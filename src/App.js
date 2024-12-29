import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Availablegames from './availablegames';
import KanaWarrior from './KanaWarrior';
import KanjiWarrior from './KanjiWarrior';
import BunpouWarrior from './BunpouWarrior';
import BunpouStudy from './bunpoustudy';
import BunpouTest from './bunpoutest';
import Homepage from './Homepage';
import Howitworks from './Howitworks';
import Login  from './Login';
import { Register } from './Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="games" element={<Availablegames />} />
          <Route path="howitworks" element={<Howitworks />} />
          <Route path="/kana-warrior" element={<KanaWarrior />} />
          <Route path="/kanji-warrior" element={<KanjiWarrior />} />
          <Route path="/bunpou-warrior" element={<BunpouWarrior />} />
          <Route path="/bunpou-study" element={<BunpouStudy />} />
          <Route path="/bunpou-test" element={<BunpouTest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
