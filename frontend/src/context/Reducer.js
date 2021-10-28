const Reducer = (state, action) => {
  console.log("Reducer", action);
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true
      };
    case "UPDATE_START":
      return {
        ...state,
        isFetching: true
      };
    case "UPDATE_SUCCESS":
      return { ...state, user: action.payload };
    case "UPDATE_FAILURE":
      return {
        ...state,
        error: true
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false
      };
    default:
      return state;
  }
};

export default Reducer;
