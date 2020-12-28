import React from "react";

function SocialButtom(props) {
  return(
    <a href={ props.url } target="_blank">
      <i className={ props.icon }></i>
    </a>
  )
}

export default SocialButtom;