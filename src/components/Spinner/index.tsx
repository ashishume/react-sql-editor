import React from "react";
import style from "./loader.module.scss";
const Spinner = () => {
  return (
    <div className={style['container']}>
      <div className={style["loader"]}></div>
    </div>
  );
};

export default Spinner;
