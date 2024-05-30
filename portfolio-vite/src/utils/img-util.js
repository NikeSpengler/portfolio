
//Extra file for image and Vite to show images correclty
function getImageURL(name) {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
}

export {getImageURL};
