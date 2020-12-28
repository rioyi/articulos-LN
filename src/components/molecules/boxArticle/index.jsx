import React from 'react';

// Atoms
import BoxContentPic from "../../atoms/boxContentPic";
import BoxDescription from "../../atoms/boxDescription";
import BoxDate from "../../atoms/boxDate";


function BoxArticle (props) {
  return (
    <article class="mod-caja-nota lugares w-100-mobile">
        <section id="" class="cont-figure">
          <BoxContentPic 
            picture={props.article.promo_items.basic.url} />
        </section>

        <div class="mod-caja-nota__descrip">
          <BoxDescription title={props.article.headlines.basic}/>
          <BoxDate date={props.article.display_date}/>
        </div>
    </article>
  )

};

export default BoxArticle


