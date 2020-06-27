import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import Routes from "./routes";

const { default: ThemeContext } = require("./lib/context");
const reducerTheme = require("./lib/reducer");

const MainApp = () => {
  const themeInitialState = {
    theme_mode: "light",
  };
  const [themeState, dispatch] = useReducer(reducerTheme, themeInitialState);

  return (
    <ThemeContext.Provider value={{ themeState, dispatch }}>
      <AppContainer>
        <Routes />
      </AppContainer>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<MainApp />, document.getElementById("root"));
