import React from "react";

function FormSearch (props) {

  return (
    <form className="com-search ">
        <input type="text" className="com-search__input" placeholder="Buscar" />
        <i className={ props.icon }></i>
        <input type="submit" value="Buscar" className="--btn --primary com-search__submit" />
    </form>
  )
}

export default FormSearch;