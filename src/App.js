import { Route, BrowserRouter, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import QRCodeTest from "./pages/QRCodeTest";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Profile />}/>
                <Route path="/test" element={ <QRCodeTest />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
