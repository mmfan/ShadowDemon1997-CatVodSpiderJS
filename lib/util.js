var charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';

export function randIndex(min, max, i) {
    let index = Math.floor(Math.random() * (max - min + 1) + min),
        numStart = charStr.length - 10;
    if (i == 0 && index >= numStart) {
        index = randIndex(min, max, i);
    }
    return index;
}

export function randomStr(len) {
    let min = 0, max = charStr.length - 1, _str = '';
    len = len || 15;
    for (var i = 0, index; i < len; i++) {
        index = randIndex(min, max, i);
        _str += charStr[index];
    }
    return _str;
}