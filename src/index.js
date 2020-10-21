module.exports = function toReadable(number) {
    num = number.toString();
    let res = '';
    if (num.length == 1 && num === '0') return 'zero';
    for (let i = 0; i < num.length; i++) {
        if (i === num.length - 1) {
            switch (num[i]) {
                case '1':
                    res = res +'one'
                    break;
                case '2':
                    res = res +'two'
                    break;
                case '3':
                    res = res +'three'
                    break;
                case '4':
                    res = res +'four'
                    break;
                case '5':
                    res = res +'five'
                    break;
                case '6':
                    res = res +'six'
                    break;
                case '7':
                    res = res +'seven'
                    break;
                case '8':
                    res = res +'eight'
                    break;
                case '9':
                    res = res +'nine'
                    break;
            }
        } else if (i === num.length - 2) {
            switch (num[i]) {
                case '1':
                    if (num[i + 1] > 0) {
                        ++i;
                        switch (num[i]) {
                            case '1':
                                res = res +'eleven'
                                break;
                            case '2':
                                res = res +'twelve'
                                break;
                            case '3':
                                res = res +'thirteen'
                                break;
                            case '4':
                                res = res +'fourteen'
                                break;
                            case '5':
                                res = res +'fifteen'
                                break;
                            case '6':
                                res = res +'sixteen'
                                break;
                            case '7':
                                res = res +'seventeen'
                                break;
                            case '8':
                                res = res +'eighteen'
                                break;
                            case '9':
                                res = res +'nineteen'
                                break;
                        }
                    } else {
                        res = res +'ten'
                    }
                    break;
                case '2':
                    res = res +'twenty'
                    break;
                case '3':
                    res = res +'thirty'
                    break;
                case '4':
                    res = res +'forty'
                    break;
                case '5':
                    res = res +'fifty'
                    break;
                case '6':
                    res = res +'sixty'
                    break;
                case '7':
                    res = res +'seventy'
                    break;
                case '8':
                    res = res +'eighty'
                    break;
                case '9':
                    res = res +'ninety'
                    break;
            }
        } else if (i === num.length - 3) {
            switch (num[i]) {
                case '1':
                    res = res +'one hundred'
                    break;
                case '2':
                    res = res +'two hundred'
                    break;
                case '3':
                    res = res +'three hundred'
                    break;
                case '4':
                    res = res +'four hundred'
                    break;
                case '5':
                    res = res +'five hundred'
                    break;
                case '6':
                    res = res +'six hundred'
                    break;
                case '7':
                    res = res +'seven hundred'
                    break;
                case '8':
                    res = res +'eight hundred'
                    break;
                case '9':
                    res = res +'nine hundred'
                    break;
            }
        }else if (i === num.length - 4) {
            switch (num[i]) {
                case '1':
                    res = res +'one thousand'
                    break;
                case '2':
                    res = res +'two thousand'
                    break;
                case '3':
                    res = res +'three thousand'
                    break;
                case '4':
                    res = res +'four thousand'
                    break;
                case '5':
                    res = res +'five thousand'
                    break;
                case '6':
                    res = res +'six thousand'
                    break;
                case '7':
                    res = res +'seven thousand'
                    break;
                case '8':
                    res = res +'eight thousand'
                    break;
                case '9':
                    res = res +'nine thousand'
                    break;
            }
        }
        if (i != num.length - 1 && num[i + 1] != 0) res = res + ' ';
    }
    return res;
}
