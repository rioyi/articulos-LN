import React from "react";


// Atoms
import Link from "../../atoms/link";

function BoxDescription (props) {

   return (
     <>
      <h2 class="com-title-acu">
        <Link>
          <b>{ props.title }. </b> 
          que tiene de escudo al Che Guevara y donde izan la bandera de Cuba
        </Link>
      </h2>
    </>
   )
};

export default BoxDescription;