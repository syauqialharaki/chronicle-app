import { BrowserRouter } from "react-router-dom";
import Main from "../src/layouts/Content";
import LayoutFooter from "../src/layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-300 via-gray-50 to-gray-200">
        <Main />
        <LayoutFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
