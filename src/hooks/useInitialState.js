/* eslint-disable no-param-reassign */
import useLocalStorage from "./useLocalStorage";
import initialState from "../../initialState";

const listTypes = ["toDoList", "doneList", "archivedList"];

const useInitialState = () => {
  const [state, setState] = useLocalStorage("litetodoData", initialState);


  const findItem = (item, list) => state[list].findIndex(task => task.key === item.key);


  const addTask = (task, listType) => {
    if (!listTypes.includes(listType)) return;
    setState({
      ...state,
      [listType]: [
        ...state[listType],
        {
          name: task,
          key: `_${Math.random().toString(36).substr(2, 9)}`,
          checked: false
        }
      ]
    });
  };

  const handleCheck = (task) => {
    const { key } = task;

    if (!task.checked) {
      task.checked = !task.checked;
      setState({
        ...state,
        toDoList: state.toDoList.filter((currentTask) => currentTask.key !== key),
        doneList: [...state.doneList, task]
      });
      return;
    }

    task.checked = !task.checked;
    setState({
      ...state,
      toDoList: [...state.toDoList, task],
      doneList: state.doneList.filter((currentTask) => currentTask.key !== key)
    });
  };

  const sendToArchive = (task, listType) => {
    if (!listTypes.includes(listType)) return;

    setState({
      ...state,
      [listType]: state[listType].filter(
        (currentTask) => currentTask.key !== task.key
      ),
      archivedList: [...state.archivedList, task]
    });
  };

  const removeTask = (task, listType) => {
    if (!listTypes.includes(listType)) return;

    setState({
      ...state,
      [listType]: state[listType].filter(
        (currentTask) => currentTask.key !== task.key
      )
    });
  };

  const updateTask = (task, listType) => {
    if (!listTypes.includes(listType)) return;

    const index = findItem(task, listType);

    if(index === -1 ) return;

    const updatedList = [...state[listType]];
    updatedList[index] = task;

    setState({
      ...state,
      [listType]: updatedList
    });
  };

  const setTheme = (theme) => {
    setState({
      ...state,
      theme
    });
  };

  const setMode = (mode) => {
    setState({
      ...state,
      mode
    });
  };

  return {
    state,
    handleCheck,
    addTask,
    sendToArchive,
    removeTask,
    updateTask,
    setTheme,
    setMode
  };
};

export default useInitialState;
