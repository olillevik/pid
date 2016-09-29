(function () {
    'use strict'

    var fnr = () => {
        const randomDate = randomDateBetween(new Date(1854, 1), new Date());
        const dateISO = randomDate.toISOString();
        const individsiffer = individsifferAsString(randomIndividsiffer(randomDate.getFullYear()));

        const d1 = dateISO.substring(8, 9);
        const d2 = dateISO.substring(9, 10);
        const m1 = dateISO.substring(5, 6);
        const m2 = dateISO.substring(6, 7);
        const aa1 = dateISO.substring(2, 3);
        const aa2 = dateISO.substring(3, 4);

        const i1 = individsiffer.substring(0, 1);
        const i2 = individsiffer.substring(1, 2);
        const i3 = individsiffer.substring(2, 3);

        const k1 = elevenGivesZero(11 - ((3 * d1 + 7 * d2 + 6 * m1 + 1 * m2 + 8 * aa1 + 9 * aa2 + 4 * i1 + 5 * i2 + 2 * i3) % 11));
        const k2 = elevenGivesZero(11 - ((5 * d1 + 4 * d2 + 3 * m1 + 2 * m2 + 7 * aa1 + 6 * aa2 + 5 * i1 + 4 * i2 + 3 * i3 + 2 * k1) % 11));

        const ret = "" + d1 + d2 + m1 + m2 + aa1 + aa2 + i1 + i2 + i3 + k1 + k2;

        if (ret.length === 11)
            return ret;
        else
            return fnr();
    };

    var elevenGivesZero = (number) => {
        if (number === 11) {
            return 0;
        }
        return number;
    }

    var el = id => document.getElementById("" + id);

    var randomDateBetween = (d1, d2) => new Date(d1.getTime() + Math.random() * (d2.getTime() - d1.getTime()));

    var randomIndividsiffer = year => {
        if (year >= 1854 && year <= 1899)
            return getRandomInt(500, 749);
        if (year >= 1900 && year <= 1999)
            return getRandomInt(0, 499);
        if (year >= 2000 && year <= 2039)
            return getRandomInt(500, 999);
    };

    var getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var individsifferAsString = individsiffer => {
        if (individsiffer <= 9) {
            return "00" + individsiffer;
        } else if (individsiffer <= 99) {
            return "0" + individsiffer;
        } else if (individsiffer > 99) {
            return "" + individsiffer;
        }
    };

    el("fnr").innerHTML = fnr();

})();