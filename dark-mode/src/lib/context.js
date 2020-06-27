const React = require("react");

const { useContext } = React;
const settings = {};
const AppContext = React.createContext(settings);
const useAppContext = () => useContext(AppContext);

module.exports = { default: AppContext, useAppContext };
