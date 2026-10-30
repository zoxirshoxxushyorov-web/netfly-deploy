
// 100. HTML teglarini yaratish
function namuna100(str) {
    let [tag, son] = str.split("*");
    return `<${tag}></${tag}>`.repeat(Number(son));
}

console.log("100:", namuna100("div*2"));


// 101. 1 dan songacha yig‘indi
function namuna101(son) {
    let yigindi = 0;

    for (let i = 1; i <= son; i++) {
        yigindi += i;
    }

    return yigindi;
}

console.log("101:", namuna101(10));


// 102. Min va max oralig‘ini tekshirish
function namuna102(son, obj) {
    return son >= obj.min && son <= obj.max;
}

console.log("102:", namuna102(4, { min: 0, max: 5 }));


// 103. Kvadrati o‘zi bilan tugashini tekshirish
function namuna103(son) {
    let kvadrat = BigInt(son) ** 2n;
    return kvadrat.toString().endsWith(son.toString());
}

console.log("103:", namuna103(6));


// 104. Massiv elementiga indeksni qo‘shish
function namuna104(arr) {
    return arr.map((son, index) => son + index);
}

console.log("104:", namuna104([1, 2, 3, 4, 5]));


// 105. Shakarli ichimliklarni olib tashlash
function namuna105(arr) {
    return arr.filter(ichimlik =>
        ichimlik !== "cola" && ichimlik !== "fanta"
    );
}

console.log("105:", namuna105(["fanta", "cola", "water"]));


// 106. Son nechta raqamdan iborat?
function namuna106(son) {
    return Math.abs(son).toString().length;
}

console.log("106:", namuna106(7154));


// 107. Raqamlarni kamayish tartibida joylashtirish
function namuna107(son) {
    return Number(
        son.toString().split("").sort((a, b) => b - a).join("")
    );
}

console.log("107:", namuna107(784));


// 108. Ikki son orasidan random son
function namuna108(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("108:", namuna108(5, 9));


// 109. Narcissistik sonni tekshirish
function namuna109(son) {
    let raqamlar = son.toString().split("");
    let daraja = raqamlar.length;

    let yigindi = raqamlar.reduce((sum, raqam) => {
        return sum + Number(raqam) ** daraja;
    }, 0);

    return yigindi === son;
}

console.log("109:", namuna109(153));


// 110. String ichidagi katta harflarni sanash
function namuna110(str) {
    let son = 0;

    for (let harf of str) {
        if (harf === harf.toUpperCase() &&
            harf !== harf.toLowerCase()) {
            son++;
        }
    }

    return son;
}

console.log("110:", namuna110("fvLzpxmgXSDrobbgMVrc"));
