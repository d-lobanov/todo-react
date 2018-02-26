import {connect} from "react-redux";
import ProgressBar from "../components/ProgressBar";

const getCategoriesIds = (categories) => {
  return categories.reduce((ids, category) => {
    const result = [...ids, category.id];

    return category.children ? result.concat(getCategoriesIds(category.children)) : result;
  }, []);
};

const getCompleted = (ids, todos) => {
  const uncompletedIds = todos.filter(todo => !todo.completed).map(todo => todo.category);

  return ids.filter(id => uncompletedIds.indexOf(id) === -1);
};

const mapStateToProps = ({data}) => {
  const ids = getCategoriesIds(data.present.categories);

  return {
    completed: getCompleted(ids, data.present.todos).length,
    all: ids.length
  };
};

export default connect(mapStateToProps)(ProgressBar);
