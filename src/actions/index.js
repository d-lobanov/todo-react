export const toggleTodo = id => ({
  "type": "TOGGLE_TODO",
  id
});

export const deleteCategory = id => ({
  "type": "DELETE_CATEGORY",
  id
});

export const toggleModal = (name, data) => ({
  "type": "TOGGLE_MODAL",
  name,
  data
});

export const createCategory = (title, parent) => ({
  "type": "CREATE_CATEGORY",
  title,
  parent,
  id: Date.now().toString()
});

export const updateCategory = (id, title) => ({
  "type": "UPDATE_CATEGORY",
  id,
  title
});

export const createTodo = (title, category) => ({
  "type": "CREATE_TODO",
  title,
  category
});

export const updateTodo = todo => ({
  "type": "UPDATE_TODO",
  todo
});
