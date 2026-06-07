import "./App.css";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const { width, height } = useWindowSize();

  const isMobile = width < 768;

  return (
    <div className="app">
      <h1>useWindowSize Hook Demo</h1>

      <div className={isMobile ? "layout mobile" : "layout desktop"}>
        <h2>{isMobile ? "Mobile Layout" : "Desktop Layout"}</h2>

        <p>Width: {width}px</p>
        <p>Height: {height}px</p>

        <p>
          {isMobile
            ? "This is a compact layout for phones."
            : "This is a full-sized layout for laptops and desktops."}
        </p>
      </div>
    </div>
  );
}

export default App;
