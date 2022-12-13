import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="iframe-container">
        <iframe
          src="https://tesissolar.ngrok.io"
          allowFullScreen
          title="myFrame"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
