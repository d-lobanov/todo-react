import queryString from "query-string";

export const addParameter = (search, obj) => {
  const query = queryString.parse(search);

  return queryString.stringify(Object.assign(query, obj));
};

export const getParameter = (search, name, defaultValue) => {
  const query = queryString.parse(search);

  return name in query ? query[name] : defaultValue;
};

export const pushQueryParam = (history, object) => {
  const query = addParameter(history.location.search, object);

  history.push(`?${query}`);
};

export const getShowDone = search => JSON.parse(getParameter(search, "showDone", false));

export const getCategory = search => Number(getParameter(search, "category", 1));

export const getTitle = search => getParameter(search, "title", "");

export const getFilter = search => ({
  title: getTitle(search),
  showDone: getShowDone(search),
  category: getCategory(search)
});
