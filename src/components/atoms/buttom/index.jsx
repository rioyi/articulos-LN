import React from "react";

function Buttom (props) {
  return(
    <button className={ props.styles }>
      { props.text }
    </button>
  )
}

export default Buttom;