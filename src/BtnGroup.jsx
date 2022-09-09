import React from "react";
import Button from "./Button";
import { useState } from "react";
import classes from 'classnames'

const BtnGroup = () => {
  const [leftBtn, setLeftBtn] = useState("");
  const [rightBtn, setRightBtn] = useState("");

  const clickHandler = (e) => {
    if (e.target.classList.contains("left")) {
      setLeftBtn("active");
      setRightBtn("");
    } else if (e.target.classList.contains("right")) {
      setRightBtn("active");
      setLeftBtn("");
    }
  };

  return (
    <div onClick={clickHandler} className={classes('btn-group')} role="group">
      <Button state={leftBtn} text="Left" position="left" />
      <Button state={rightBtn} text="Right" position="right" />
    </div>
  );
};
export default BtnGroup;
