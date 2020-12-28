import React from "react";

// Atoms

import Link from "../link"


function BoxContentPic (props) {
  return (
    <Link href="/" extraClass="figure">
      <picture id="" class="content-pic picture">
          <img src={props.picture} alt="" class="content-img" />
      </picture>
    </Link>
  )
}

export default BoxContentPic;