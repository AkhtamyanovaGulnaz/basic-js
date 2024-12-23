const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let array = names;

  for (let i = 0; i < array.length; i++) {
    let k = 1;

    for (let j = 0; j < i; j++) {
      if (array[i] === array[j]) {
        while (array.slice(0, i).includes(`${array[i]}(${k})`)) {
          k++;
        }

        array[i] += `(${k})`;
        break;
      }
    }
  }

  return array;
}

module.exports = {
  renameFiles
};
