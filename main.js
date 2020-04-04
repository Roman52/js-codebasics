
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






