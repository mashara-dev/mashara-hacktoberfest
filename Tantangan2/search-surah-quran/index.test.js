const searchQuran = require('.');

test('check Al-Faatiha', () => {
    expect(searchQuran("Al-Faatiha")).toEqual({
        "number": 1,
        "name": "\u0633\u064f\u0648\u0631\u064e\u0629\u064f \u0671\u0644\u0652\u0641\u064e\u0627\u062a\u0650\u062d\u064e\u0629\u0650",
        "englishName": "Al-Faatiha",
        "englishNameTranslation": "The Opening",
        "numberOfAyahs": 7,
        "revelationType": "Meccan"
    });
});

test('check Al-Baqara', () => {
    expect(searchQuran("Al-Baqara")).toEqual({
        "number": 2,
        "name": "\u0633\u0648\u0631\u0629 \u0627\u0644\u0628\u0642\u0631\u0629",
        "englishName": "Al-Baqara",
        "englishNameTranslation": "The Cow",
        "numberOfAyahs": 286,
        "revelationType": "Medinan"
    });
});
test('check Ibrahim', () => {
    expect(searchQuran("Ibrahim")).toEqual({
        "number": 14,
        "name": "\u0633\u0648\u0631\u0629 \u0627\u0628\u0631\u0627\u0647\u064a\u0645",
        "englishName": "Ibrahim",
        "englishNameTranslation": "Abraham",
        "numberOfAyahs": 52,
        "revelationType": "Meccan"
    });
});