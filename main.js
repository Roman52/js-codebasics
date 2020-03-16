const finalGrade = (exam, projects) => {
    let res = 0;

    if (exam > 90 || projects > 10) {
        res = 100;
    } else if (exam > 75 && projects >= 5) {
        res = 90;
    } else if (exam > 50 && projects >= 2) {
        res = 75;
    }

    return res;
}



