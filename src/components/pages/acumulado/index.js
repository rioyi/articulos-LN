import React, { useState, useEffect } from "react"

// Template
import AcumuladoTemplate from "../../templates/acumulado"

// Context
import { ArticleContext } from "../../../context/articleContext";

let api_url = 'https://api-test-ln.herokuapp.com/articles';

function Acumulado(){
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getArticle = () => {
      fetch(api_url)
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error)
        // into the cache itself
        // You have to send it, as I have done below
        if ( res.status >= 400 ) {
          throw new Error("Server responds with error!");
        }
        return res.json();
      })
      .then(
        (data) => {
          setArticles(data.articles);
          setIsLoaded(true);
        },
        (err) => {
          setErr(err);
          setIsLoaded(true);
        }
      );
    };
    getArticle();
  }, []);


  // console.log(articleContext)

    return(
      <ArticleContext.Provider
        value={{
          articles,
          isLoaded,
          err
        }}
      >
        <AcumuladoTemplate />
      </ArticleContext.Provider>
    )
  }
  


export default Acumulado;