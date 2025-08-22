function CalcAllSecs(hor) {

    const secsToArr = hor.split(":");
    const secs = secsToArr.pop();
    let reusltSecs =  Number(secs);

    const minutesToSecs = Number(secsToArr[1]) * 60;
    const HoursToSecs =  Number(secsToArr[0]) * 3600;

    reusltSecs += minutesToSecs + HoursToSecs;

    return reusltSecs;
}


console.log(CalcAllSecs("02:30:10"));