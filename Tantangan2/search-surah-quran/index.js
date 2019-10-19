function searchQuran(nameSurah) {
  const { data } = require("../data.json");
  for (let d of data) if (d.englishName === nameSurah) return d;
}
module.exports = searchQuran;
