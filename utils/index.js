module.exports = {
  isSameArray(firstArr, secondArr) {
    let isSame = true;

    if (!Array.isArray(firstArr) || !Array.isArray(firstArr)) return false;

    if (firstArr.length !== secondArr.length) return false;

    firstArr.map((arrItem, index) => {
      if (arrItem !== secondArr[index]) isSame = false;
    });

    return isSame;
  },
};
