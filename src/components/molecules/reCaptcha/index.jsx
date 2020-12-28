import React from "react";

// Atoms
import Link from "../../atoms/link";

const captchaLinks = [
  {
    label: "Condiciones",
    url: "https://policies.google.com/terms?hl=es-419"
  },
  {
    label: "Private",
    url: "https://policies.google.com/privacy?hl=es-419"
  }
]

function ReCaptcha () {
  const listLinks = captchaLinks.map((item, index) => {
    return (
       <Link label={item.label} href={item.href} key={index} extraClass="condition" />
    )
  })

  return (
    <p>Protegido por re CAPTCHA: 
      { listLinks }
    </p> 
  )
}

export default ReCaptcha;