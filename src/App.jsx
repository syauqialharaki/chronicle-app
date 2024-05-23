import Main from "../src/layouts/Content";
import LayoutFooter from "../src/layouts/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Main />
      <LayoutFooter />
    </div>
  );
}

export default App;
