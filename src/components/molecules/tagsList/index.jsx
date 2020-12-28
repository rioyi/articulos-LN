import React from "react";

///  Atoms
import Link from "../../atoms/link";

const getTagsFromArticles = (articles = []) =>
  articles.map((el) => (el && el.taxonomy && el.taxonomy.tags) || []).flat();

const getGroupedTags = (tagList = []) =>
  Object.values(
    tagList.reduce((acc, current = {}) => {
      const { slug } = current || {};
      let { count = 0 } = acc[slug] || {};
      count++;
      return {
        ...acc,
        [slug]: {
          ...current,
          count,
        },
      };
    }, {})
  );

const getOrderedTags = (tagList = []) =>
  tagList.sort((a, b) => b.count - a.count);

const TagList = ({ articles }) => {
  const tagList = getTagsFromArticles(articles);
  const groupedTags = getGroupedTags(tagList);
  const orderedTags = getOrderedTags(groupedTags);

  return (
    orderedTags &&
    orderedTags
      .splice(0, 10)
      .map(({ slug, text, count }, index) => (
        <Link label={`${text} (${count})`} key={index} href={`/tema/${slug}`} />
      ))
  );
};

export default TagList;
