function doubleEveryOther(a) {
    for(let i=1; i < a.length; i = i + 2) { a[i] *= 2 }
    return a;
}

doubleEveryOther([1, 19, 6, 2, 12, -3]);