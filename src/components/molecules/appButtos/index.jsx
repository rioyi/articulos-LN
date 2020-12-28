import React from "react";

// Atmos
import GooglePlay from "../../atoms/googlePlay";
import AppleStore from "../../atoms/appleStore";

function AppsButtoms () {
  return (
    <section className="col-12 col-desksm-4 col-desk-3 footer-header__app">
        <GooglePlay />
        <AppleStore />
    </section>
  ) 
}

export default AppsButtoms;