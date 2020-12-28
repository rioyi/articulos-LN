import { createContext, useContext } from "react";

export const ArticleContext = createContext();

export function useArticle() {
  return useContext(ArticleContext);
};
