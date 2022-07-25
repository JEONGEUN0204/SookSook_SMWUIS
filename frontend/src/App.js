import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MyPage from './routes/MyPage';
import OpenStudy from './routes/OpenStudy';
import SetBoardPrivate from './routes/SetBoardPrivate';
import Setting from './routes/Setting';
import EnterBoard from './routes/EnterBoard';
import MemberGrade from './routes/MemberGrade';
import Board1 from './routes/Board1';
import Board2 from './routes/Board2';
import Private from './routes/Private';
import Login from './routes/Login';
import Join from './routes/Join';
import Share from './routes/Share';
import Qaboard from './routes/Qaboard';

import OpenStudy2 from './routes/OpenStudy2';

import Sell from './routes/Sell';


function App() {
  return (
    <Router>
      <Routes>{/*한번에 하나의 Route를 렌더링하기 위함*/}
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/enterboard" element={<EnterBoard />}></Route>
        <Route path="/openstudy" element={<OpenStudy />}></Route>
        <Route path="/openstudy2" element={<OpenStudy2 />}></Route>
        <Route path="/membergrade" element={<MemberGrade />}></Route>git
        <Route path="/setboard_private" element={<SetBoardPrivate />}></Route>
        <Route path="/board1" element={<Board1 />}></Route>
        <Route path="/board2" element={<Board2 />}></Route>
        <Route path="/private" element={<Private />}></Route>
        <Route path="/sell" element={<Sell />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/share" element={<Share />}></Route>
        <Route path="/qaboard" element={<Qaboard />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;