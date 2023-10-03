export const handleInputChange = ({key,value,setState,errors,setErrors}) => {
  console.log({key,value})
  const keys = key.split(".");
  if (errors?.[key]) {
    setErrors((st) => ({
      ...st,
      [key]: null,
    }));
  }

  switch (keys.length) {
    case 1:
      setState((state) => ({
        ...state,
        [keys[0]]: value,
      }));
      break;
    case 2:
      setState((state) => ({
        ...state,
        [keys[0]]: {
          ...state[keys[0]],
          [keys[1]]: value,
        },
      }));
      break;
    case 3:
      setState((state) => ({
        ...state,
        [keys[0]]: {
          ...state[keys[0]],
          [keys[1]]: {
            ...state[keys[0]][keys[1]],
            [keys[2]]: value,
          },
        },
      }));
      break;
    default:
      return;
  }
};