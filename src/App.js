import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utilities/reduxStore";

function App() {
  return <Provider store={appStore}><Body /></Provider>;
}

export default App;
  