import React from "react";

const MinifyImgs = ({ classHiddenImg, pathImg }) => {
  return (
    <picture>
      <source srcSet={require(`../assets/${pathImg}.webp`)} type="image/webp" />
      <source srcSet={require(`../assets/${pathImg}.png`)} type="image/png" />
      <img
        src={require(`../assets/${pathImg}.png`)}
        className={classHiddenImg ? classHiddenImg : ""}
        alt=""
      />
    </picture>
  );
};

export default MinifyImgs;
