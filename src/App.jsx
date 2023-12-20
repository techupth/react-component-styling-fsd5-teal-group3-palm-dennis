import "./App.css";
import { Button } from "./components/Button";
import Alert from "./components/Alert";
function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button buttonType="Primary" />
        <Button buttonType="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="error" content="error alert box" />
        <Alert type="warning" content="warning alert box" />
        <Alert type="info" content="info alert box" />
        <Alert type="success" content="success alert box" />
      </div>
    </div>
  );
}

export default App;
