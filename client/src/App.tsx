import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import Translation from "./pages/Translation/Translation.tsx";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {/*Home Route*/}
            <Route path="/" element={<Home />} />

            {/*Translation Route*/}
            <Route path="/translation" element={<Translation />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
