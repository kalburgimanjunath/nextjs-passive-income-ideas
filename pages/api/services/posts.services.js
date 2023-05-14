const getAllPosts = async () => {
  const allPosts = await fetch('../api/posts')
    .then((res) => res.json())
    .then((result) => result.posts);
  return allPosts;
};
const getPostById = async (id) => {
  console.log(id);
  const allPosts = await fetch('../api/posts')
    .then((res) => res.json())
    .then((result) => result.posts);
  return allPosts;
  // console.log(allPosts.filter((item) => item.id == id));
  // return allPosts.filter((item) => item.id == id);
};
export { getAllPosts, getPostById };
