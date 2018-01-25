import React from "react";
import Navigation from "./components/Navigation";
import Form from "./components/Form";
import Ctable from "./components/Ctable";

import "./styles.css";

export default function App() {
  return (
    <div>
      <Navigation />
      <Form />
      <Ctable />
    </div>
  )
}
