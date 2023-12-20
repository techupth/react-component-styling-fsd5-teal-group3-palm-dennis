import "./App.css";
import { css } from "@emotion/react";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";
import frown from "./assets/frown.svg";
import checkCircle from "./assets/check-circle.svg";
import alertTriangle from "./assets/alert-triangle.svg";
import alertCircle from "./assets/alert-circle.svg";
function App() {
  const obj = [
    {
      icon: frown,
      message: "This is error alert box",
      bgColor: "#F9C8C8",
    },
    {
      icon: alertTriangle,
      message: "This is warning alert box",
      bgColor: "#F9D9C8",
    },
    {
      icon: alertCircle,
      message: "This is info alert box",
      bgColor: "#F9EBC8",
    },
    {
      icon: checkCircle,
      message: "This is success alert box",
      bgColor: "#CEF7CD",
    },
  ];

  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button textColor="#fff" />
        <Button textColor="#fff" backgroundColor="#07A4E8" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        {/* <Alert
          icon={frown}
          message="This is error alert box"
          bgColor="#F9C8C8"
        />
        <Alert
          icon={alertTriangle}
          message="This is warning alert box"
          bgColor="#F9D9C8"
        />
        <Alert
          icon={alertCircle}
          message="This is info alert box"
          bgColor="#F9EBC8"
        />
        <Alert
          icon={checkCircle}
          message="This is success alert box"
          bgColor="#CEF7CD"
        /> */}
        {obj.map((item, index) => {
          return (
            <Alert
              key={index}
              icon={item.icon}
              message={item.message}
              bgColor={item.bgColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
