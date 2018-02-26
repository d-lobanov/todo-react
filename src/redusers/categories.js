const DEFAULT_CATEGORIES = [
  {
    title: "Daily plan", id: 1
  },
  {
    title: "Events", id: 2,
    children: [
      {
        id: 21,
        title: "Vacation",
        children: [
          {title: "To buy", id: 211},
          {title: "To book", id: 212}
        ]
      },
      {
        title: "Birthday", id: 22
      },
    ]
  },
  {
    title: "To learn", id: 3,
    children: [
      {
        title: "JS", id: 31,
        children: [
          {title: "React", id: 311},
        ]
      },
      {
        title: "Blockchain", id: 32
      },
    ]
  },
];

const clone = obj => Object.assign({}, obj);

const addCategory = (categories, title, parent) => {
  const newCategory = {title, id: Date.now()};

  if (parent === 0) {
    return categories.concat({title, id: Date.now()});
  }

  const add = (categories) => categories.map(c => {
    const category = clone(c);

    if (category.children) {
      category.children = add(category.children);
    }

    if (category.id === parent) {
      category.children = [newCategory].concat(category.children || []);
    }

    return category;
  });

  return add(categories);
};

const editCategory = (categories, id, title) => {
  return categories.map(c => {
    const category = clone(c);

    if (category.id === id) {
      category.title = title;
    }

    category.children = category.children && editCategory(category.children, id, title);

    return category;
  })
};

const deleteCategory = (categories, id) => {
  return categories
    .filter(category => category.id !== id)
    .map(c => {
      const category = clone(c);

      category.children = category.children && deleteCategory(category.children, id);

      return category;
    });
};

const categories = (state = DEFAULT_CATEGORIES, action) => {
  switch (action.type) {
    case "CREATE_CATEGORY":
      return addCategory(state, action.title, action.parent);
    case "UPDATE_CATEGORY":
      return editCategory(state, action.id, action.title);
    case "DELETE_CATEGORY":
      return deleteCategory(state, action.id);
    default:
      return state;
  }
};

export default categories;

