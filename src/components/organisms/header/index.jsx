import React from 'react';

// Atoms
import Buttom from "../../atoms/buttom"
import HamburgerMenu from "../../atoms/hamburgerMenu"
import FormSearch from "../../atoms/formSearch";
import LogoLN from "../../atoms/logoLN";


function Header () {
  return (
    <header className="header">
      <div className="lay">
          <div className="row">
              <div className="col-4 header__left">
                <HamburgerMenu />
                <FormSearch icon="icon-search"/>
              </div>

              <div className="col-4  header__middle">
                <LogoLN />
              </div>

              <div className="col-4 header__right">

              <div className="com-usuario">
                  <Buttom text="Suscribite" styles="--btn --highlight hlp-marginRight-35"/>
                  <Buttom text="Ingresar" styles="--btn --secondary"/>
              </div>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header;