const DEFAULT_TODOS = [
  {id: 0, category: 1, title: "Hit the gym", completed: false, description: "Test 1 description"},
  {id: 1, category: 1, title: "Pay bills", completed: true, description: "Test 1 description"},
  {id: 2, category: 1, title: "Meet George", completed: false, description: "Test 1 description"},
  {id: 3, category: 1, title: "Buy eggs", completed: false, description: "Test 1 description"},
  {id: 4, category: 1, title: "Read a book", completed: true, description: "Test 1 description"},
  {id: 5, category: 21, title: "Send email", completed: true, description: ""},
  {id: 6, category: 211, title: "Sunglasses", completed: true, description: ""},
  {id: 7, category: 211, title: "Suntan cream", completed: false, description: ""},
  {id: 8, category: 212, title: "Hotel", completed: false, description: "booking.com"},
  {id: 9, category: 212, title: "Flights to Vienna", completed: false, description: "skyscanner.ru"},
  {id: 10, category: 22, title: "Book kvestroom", completed: false, description: ""},
  {id: 11, category: 22, title: "Call Mary", completed: false, description: ""},
  {id: 12, category: 31, title: "AngularJS", completed: true, description: "https://angularjs.org/"},
  {id: 13, category: 31, title: "Ember", completed: false, description: "https://www.emberjs.com/"},
  {id: 14, category: 311, title: "React JS 16+", completed: true, description: "https://reactjs.org/"},
  {id: 15, category: 311, title: "React router 4", completed: true, description: "https://github.com/ReactTraining/react-router"},
  {id: 16, category: 311, title: "Redux", completed: true, description: "https://redux.js.org/"},
  {id: 17, category: 311, title: "Redux undo", completed: true, description: "https://github.com/omnidan/redux-undo"},
  {id: 18, category: 311, title: "Ant design", completed: true, description: "https://ant.design/"},
  {id: 19, category: 311, title: "Query string", completed: true, description: "https://github.com/sindresorhus/query-string"},
  {id: 20, category: 32, title: "Coursera", completed: false, description: "https://www.coursera.org/learn/cryptocurrency"},
  {id: 21, category: 32, title: "Mastering bitcoin", completed: false, description: "https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain/dp/1491954388"},
];

const createTodo = (state, title, category) => [
  {id: Date.now(), category, title, completed: false, description: ""},
  ...state
];

const updateTodo = (state, updateTodo) => state.map(todo => todo.id === updateTodo.id ? updateTodo : todo);

const toggleTodo = (state, id) => state.map(todo => {
  return todo.id === id ? {...todo, completed: !todo.completed} : todo;
});

const todos = (state = DEFAULT_TODOS, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return createTodo(state, action.title, action.category);
    case "UPDATE_TODO":
      return updateTodo(state, action.todo);
    case "TOGGLE_TODO":
      return toggleTodo(state, action.id);
    case "DELETE_CATEGORY":
      return state.filter(todo => todo.category !== action.id);
    default:
      return state;
  }
};

export default todos;
