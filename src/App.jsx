import "./App.css";
import Main from "./screens/Main";
import Welcome from "./screens/Welcome";
import { useState } from "react";

export default function App() {
  const [welcomeScreen, setWelcomeScreen] = useState(true);
  const toggleMainScreen = () => {
    setWelcomeScreen(!welcomeScreen);
  };
  return (
    <div className="container full-height">
      {welcomeScreen ? <Welcome toggler={toggleMainScreen} /> : <Main />}
    </div>
  );
}
