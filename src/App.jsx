import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allpages from "./pages/Allpages";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Navbar from "./Navbar";

const App = () => {
    return (
        <main className="page" data-testid="page-root">
            <Router>
                <Navbar />
                <div className="page-links">
                    <Routes>
                        <Route path="/Allpages" element={<Allpages />}></Route>
                        <Route path="/Page1" element={<Page1 />}></Route>
                        <Route path="/Page2" element={<Page2 />}></Route>
                        <Route path="/Page3" element={<Page3 />}></Route>
                        <Route path="/Page4" element={<Page4 />}></Route>
                        <Route path="/Page5" element={<Page5 />}></Route>
                        <Route path="/Page6" element={<Page6 />}></Route>
                        <Route path="/Page7" element={<Page7 />}></Route>
                        <Route path="/Page8" element={<Page8 />}></Route>
                        <Route path="/Page9" element={<Page9 />}></Route>
                        <Route path="/Page10" element={<Page10 />}></Route>
                    </Routes>
                </div>
            </Router>
        </main>
    );
};

export default App;
