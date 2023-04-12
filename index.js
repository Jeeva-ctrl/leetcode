// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/**
 * @param {string} path
 * @return {string}
 */
 const simplifyPath = (path) => {
  const simplifiedPaths = [];
  const dirs = path.split('/').filter((dir) => dir !== '' && dir !== '.');
  for (const dir of dirs) {
    if (dir === '..') {
      simplifiedPaths.pop();
    } else {
      simplifiedPaths.push(dir);
    }
  }
  return '/' + simplifiedPaths.join('/');
};

console.log("simplifyPath",simplifyPath("../home/"))