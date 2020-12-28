import React from "react";

function Links (props) {
  return (
    <a href={ props.href } 
      target={ props.target }
      className={ props.extraClass }>
        { props.label }
        { props.children }
    </a>
  );
}

export default Links