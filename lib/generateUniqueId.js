// generate unique string for unique the number
const genereateUniqueId = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrst";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
};

module.exports = genereateUniqueId;
