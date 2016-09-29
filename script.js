(function () {
    'use strcit'

    var el = id => document.getElementById("" + id);

    var fnr = () => {
        // fødselsdato 2000-01-01
        const d1 = 0;
        const d2 = 1;
        const m1 = 0;
        const m2 = 1;
        const aa1 = 2;
        const aa2 = 0;
        const aa3 = 0;
        const aa4 = 0;
        // individsiffer 500
        const i1 = 5;
        const i2 = 0;
        const i3 = 0;

        const k1 = 11 - ((3 * d1 + 7 * d2 + 6 * m1 + 1 * m2 + 8 * aa1 + 9 * aa2 + 4 * i1 + 5 * i2 + 2 * i3) % 11);

        const k2 = 11 - ((5 * d1 + 4 * d2 + 3 * m1 + 2 * m2 + 7 * aa1 + 6 * aa2 + 5 * i1 + 4 * i2 + 3 * i3 + 2 * k1) % 11);

        return "" + d1 + d2 + m1 + m2 + aa1 + aa2 + aa3 + aa4 + i1 + i2 + i3 + k1 + k2;

        //Individsiffer
        //000–499 omfatter personer født i perioden 1900–1999.
        //500–749 omfatter personer født i perioden 1854–1899.
        //500–999 omfatter personer født i perioden 2000–2039.
        //900–999 omfatter personer født i perioden 1940–1999.
    };

    el("fnr").innerHTML = fnr();

})();