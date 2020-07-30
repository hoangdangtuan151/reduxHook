import React from "react";
import ButtonGroup from "./groupButon"
import { useSelector } from "react-redux";

const HelloWorld = () => {
  const tech = useSelector(state => state.type.tech)
  console.log("renderch")
  return (
    <div>
      {tech}
      <ButtonGroup key={2} technologies={["React", "Vue", "Angular", 'Delete']} />
    </div>
  )
}
export default HelloWorld;
