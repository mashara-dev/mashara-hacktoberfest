const hijriConverter = require('./');

test('check today', () => {
    expect(hijriConverter("2019-10-19", 0)).toBe("Sabt, 20 Safar 1441 H");
});

test('check today, adjust minus: -1, -2', () => {
    expect(hijriConverter("2019-10-19", -1)).toBe("Sabt, 19 Safar 1441 H");
    expect(hijriConverter("2019-10-19", -2)).toBe("Sabt, 18 Safar 1441 H");
});

test('check today, adjust plus: 1, 2', () => {
    expect(hijriConverter('2019-10-19', 1)).toBe("Sabt, 21 Safar 1441 H");
    expect(hijriConverter('2019-10-19', 2)).toBe("Sabt, 22 Safar 1441 H");
});

test('check yesterday and tomorrow', () => {
    expect(hijriConverter("2019-10-20", 0)).toBe("Ahad, 21 Safar 1441 H");
    expect(hijriConverter("2019-10-18", 0)).toBe("Jumuah, 19 Safar 1441 H");
});

test('check last year', () => {
    expect(hijriConverter("2018-10-19", 0)).toBe("Jumuah, 9 Safar 1440 H");
});

test('shoud error. adjust: -3 and 3', () => {
    expect(hijriConverter('2019-10-19', -3)).toBe('error');
    expect(hijriConverter('2019-10-19', 3)).toBe('error');
});