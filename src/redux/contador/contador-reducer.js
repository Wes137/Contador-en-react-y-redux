const contador = (previousState = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(previousState);
      return previousState + 1;
    case "INCREMENT_IN_2":
      console.log(previousState);
      return previousState + 2;
    case "DECREMENT":
      console.log(previousState);
      return previousState - 1;
    case "DECREMENT_IN_2":
      console.log(previousState);
      return previousState - 2;
    case "RESET":
      console.log(previousState);
      return 0;
    default:
      return previousState;
  }
};

export default contador;
