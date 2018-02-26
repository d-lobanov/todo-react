const toggleModal = (modals, name, newData) => {
  const {data = {}, visible = false} = modals[name] || {};

  return {
    ...modals,
    [name]: {
      data: newData || data,
      visible: !visible,
      id: Date.now()
    }
  };
};

const modals = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return toggleModal(state, action.name, action.data);
    default:
      return state;
  }
};

export default modals;
