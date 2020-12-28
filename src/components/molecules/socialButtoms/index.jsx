import React from 'react';

// Atoms
import SocialButtom from "../../atoms/socialsButtom";

const socials = [
  {
    icon: 'icon-facebook',
    url: 'https://www.facebook.com/lanacion'
  },
  {
    icon: 'icon-twitter',
    url: 'https://twitter.com/LANACION'
  },
  {
    icon: 'icon-instagram',
    url: 'https://www.instagram.com/lanacioncom/'
  },
  {
    icon: 'icon-rss',
    url: 'http://servicios.lanacion.com.ar/herramientas/rss/ayuda'
  }
]


function SocialButtoms () {
  const socialButtons = socials.map(({icon, url}) => (
    icon && url && <SocialButtom icon={icon} url={url}/>
  ))

  return (
    <section className="col-12 col-desksm-4 col-desk-3 footer-header__redes">
      { socialButtons }
    </section>
  )
}

export default SocialButtoms;