import React from "react";
import { footerLinks } from "./siteLinks";

// Atoms
import LogoLN from "../../atoms/logoLN";

// Molecules
import SocialButtom from "../../molecules/socialButtoms";
import AppButtoms from "../../molecules/appButtos";
import ReCaptcha from "../../molecules/reCaptcha";
import Links from "../../atoms/link";

const copyrightFiscal = "Miembro de GDA. Grupo de Diarios América"

function Footer() {
  const listLinks = footerLinks.map((item, index) => {
    return (
      <Links
        label={item.label}
        href="iteam.url"
        extraClass="item_link"
        key={index}
      />
    );
  });

  return (
    <footer>
      <div className="lay">
        <section className="row footer-header">
          <section className="col-desksm-4 col-desk-6 footer-header__logo">
            <LogoLN />
          </section>
          <SocialButtom />
          <AppButtoms />
        </section>
        <section className="row footer-sitio">
          <section className="col-desksm-9 col-deskxl-8 footer-sitio__links">
            {listLinks}
          </section>
          <section className="col-desksm-3 col-deskxl-4 footer-sitio__captcha">
            <ReCaptcha />
          </section>
        </section>
        <section className="row footer-copyright">
          <section className="col-desksm-6 col-desk-6 footer-copyright__fiscal">
            <p>
              <img
                src="https://static.glanacion.com/v2/ln/img/gda.jpg"
                alt="gda"
                className="img_gda"
              />
              { copyrightFiscal }
              <Links href="https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx">
                <img
                  src="https://static.glanacion.com/v2/ln/img/data.jpg"
                  alt="Data fiscal"
                  className="img_data-fiscal"
                />
              </Links>
            </p>
          </section>
          <section className="col-desksm-6 col-desk-6 footer-copyright__reserved">
            <p>Copyright 2019 SA LA NACION | Todos los derechos reservados</p>
          </section>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
