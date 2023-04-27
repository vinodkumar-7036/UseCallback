import React, { useState, useEffect } from "react";

const List = (props) => {
  const [item, setItem] = useState([]);
  const { themeStyle, handleDisplay } = props;
  useEffect(() => {
    setItem(handleDisplay);
    console.log("::::> re rendered");
  }, [handleDisplay]);
  return (
    <>
      <>
        {item.map((val) => {
          return <div style={themeStyle}>{val}</div>;
        })}
      </>
    </>
  );
};
export default List;
