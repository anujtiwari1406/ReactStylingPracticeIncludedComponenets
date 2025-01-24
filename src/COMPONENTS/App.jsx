import React from "react";

function App() {
  const colourStyle = {
    color: "red",
  };

  let greeting = "";

  const currentTime = new Date().getHours();

  if (currentTime < 12) {
    greeting = "Good morning";
    colourStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    colourStyle.color = "green";
  } else {
    greeting = "Good evening";
    colourStyle.color = "blue";
  }

  return <h1 style={colourStyle}>{greeting}</h1>;
}

export default App;
