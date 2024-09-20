const generateUniqueName = (normalName) => {
  if (!normalName) {
    return "Please enter normal name";
  }
  const updateFolderName = normalName.toString().trim().toLowerCase();
  return updateFolderName + generateUniqueString(12).toLocaleLowerCase();
};

module.exports = generateUniqueName;

// generate unique string for unique the number
const generateUniqueString = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};
