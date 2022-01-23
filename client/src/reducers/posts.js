export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.paylaod;
    case "CREATE":
      return [...posts, action.paylaod];
    default:
      return posts;
  }
};
