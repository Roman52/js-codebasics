
// lesson 56
/*
Реализуйте функцию, которая принимает на вход номер кредитки (состоящей из 16 цифр) и возвращает его скрытую версию, которая может использоваться на сайте для отображения. Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581. Другими словами, функция заменяет первые 12 символов, на четыре звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию - 4.
 */

/*
const getHiddenCard = (cardNumber, numsCount = 4) => {
    const hiddenCardNumber = cardNumber.toString().slice(12);
    return hiddenCardNumber.padStart(hiddenCardNumber.length + numsCount, '*');
}

var cardNumber = getHiddenCard(1234567812345678, 2);
console.log(cardNumber);

 */

// lesson  57

// const capitalize = (str) => str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
/*
const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

console.log(capitalize('arya'));;
 */

//lesson 60
/*
const hasTargaryenReference = (str) => str.substring(0, 'Targaryen'.length) === 'Targaryen';

console.log(hasTargaryenReference('Targaryen'));
 */

//lesson 61 https://ru.code-basics.com/languages/javascript/modules/logic/lessons/logical-operators
/*
Если у солдата доспехи красного цвета И нет щита
ИЛИ
если у солдата есть щит с изображением льва
то это Ланнистер.
 */

/*
const isLannisterSoldier = (color, shield) => {
    return (shield === 'lion') || (color === 'red' && shield === null);
}

console.log(isLannisterSoldier('red', 'lion'));
 */

//lesson 63 https://ru.code-basics.com/languages/javascript/modules/logic/lessons/logical-operators-2

/*
const isNeutralSoldier = (armourColor, shieldColor) => armourColor !== 'red' && shieldColor === 'black';

 */

//lesson 66 https://ru.code-basics.com/languages/javascript/modules/conditionals/lessons/if-else
/*
const normalizeUrl = (url) => {
    if (url.substring(0, 7) === 'http://' ) {
        return 'https://' + url.substring(7);
    } else {
        return 'https://' + url;
    }
}

console.log(normalizeUrl('website.ru'));
 */
/*
const convertText = (str) => {
    return (str[0] === str[0].toUpperCase()) ? str : reverse(str);
    // if (str[0] === str[0].toUpperCase()) {
    //     return str;
    // } else {
    //     return reverse(str);
    // }
}

console.log(convertText('Hello'));

 */

//lesson 71 https://ru.code-basics.com/languages/javascript/modules/loops/lessons/aggregation
/*
const multi = (num1, num2) => {
    let result = 1;
    let i = num1;

    while (i <= num2) {
        result = result * i;
        i++;
    }

    return result;
}

multi(2, 4);

 */

//lesson 72 https://ru.code-basics.com/languages/javascript/modules/loops/lessons/iteration-over-string
/*
const printReversedNameBySymbol = (str) => {
    let i = str.length - 1;
    while (i >= 0) {
        console.log(str[i]);
        i--;
    } 
}

printReversedNameBySymbol('Arya');

 */

//lesson 74 string reverse by Roman Zharov
// https://ru.code-basics.com/languages/javascript/modules/loops/lessons/build-strings

/*
const reverse = (str) => {
    let i = 0;
    let res = '';

    while (i <= str.length - 1) {
        res = str[i] + res;
        i++;
    }
    return res;

    //Единственный возможно сложный момент в этом коде – прочувствовать как собирается сама строка. Так как каждый следующий символ прикрепляется к результирующей строке слева, то, в конечном итоге, строка оказывается перевернута.
}

console.log(reverse('Hello!'));
 */

// строку можно перевернуть и если идти в обратную сторону (изначально я так и сделал)
/*
const reverse = (str) => {
    let i = str.length - 1;
    let res = '';

    while (i >= 0) {
        res = res + str[i];
        i--;
    }
    return res;
}

console.log(reverse('Hello!'));
 */

//lesson 75 https://ru.code-basics.com/languages/javascript/modules/loops/lessons/syntax-sugar
/*
const filterString = (str, char) => {
    let i = 0;
    let res = '';

    while (i <= str.length - 1) {
        if (str[i] !== char) {
            res += str[i];
        }

        i++;
    }

    return res;
}

filterString('If I look back I am lost', 'I');
 */

//lesson 76 https://ru.code-basics.com/languages/javascript/modules/loops/lessons/mutators
/*
const makeItFunny = (str, upperCaseSymbol) => {
    let i = 0;
    let res = '';
    
    while (i <= str.length - 1) {
        if ((i + 1) % upperCaseSymbol === 0) {
            res += str[i].toUpperCase();
        } else {
            res += str[i];
        }
        
        i++;
    }

    return res;
}

console.log(makeItFunny('I never look back', 3));
 */

//lesson 77 https://ru.code-basics.com/languages/javascript/modules/loops/lessons/return-from-loops
/*
const hasChar = (str, char) => {
    let i = 0;

    while (i < str.length) {
        if (str[i] === char) {
            return true;
        }

        i++;
    }

    return false;
}

console.log(hasChar('Rently', 'o'));
 */

//lesson 78 https://ru.code-basics.com/languages/javascript/modules/loops/lessons/for

const encrypt = (str) => {
    let res = '';

    for (let i = 0; i < str.length; i++) {

        if (i !== str.length - 1) {
            res += str[i + 1];
        }

        res += str[i];
        i++;
    }

    return res;
}

encrypt('go12!');




