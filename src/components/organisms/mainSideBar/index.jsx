import React from "react";

// Atoms
import Title from "../../atoms/title";

// Molecules
import BoxArticles from "../../molecules/boxArticle";
import TagList from "../../molecules/tagsList";

// Context
import { useArticle } from "../../../context/articleContext";

function MainSideBar() {
  const { articles, err, isLoaded } = useArticle();
  const filterArticles = articles.filter((article) => (
    article && article.subtype === "7"
  ));
  const articlesSubtype7 = filterArticles.map((article, index) => (
    article && <BoxArticles article={article} key={index} />
  ));

  if (err) {
    return (
      <div className="sidebar__main">
        <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
          {err.message}
        </section>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="sidebar__main">
        Loading...
      </div>
    )
  } else {
    return (
      <div className="sidebar__main">
        <div className="row">
          <Title text="Acumulado Grilla" />
          <div className="row">
            <div
              id=""
              className="cont_tags com-secondary-tag hlp-marginBottom-20"
            >
              <TagList articles={articles} />
            </div>

            <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
              {articlesSubtype7}
              <div class="transparency"></div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSideBar;
