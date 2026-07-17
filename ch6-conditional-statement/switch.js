let score = 85;

switch (true) {
    case score >= 90:
        console.log(`Your score is ${score}. Grade: A`);
        break;

    case score >= 80:
        console.log(`Your score is ${score}. Grade: B`);
        break;

    case score >= 70:
        console.log(`Your score is ${score}. Grade: C`);
        break;

    case score >= 60:
        console.log(`Your score is ${score}. Grade: D`);
        break;

    default:
        console.log(`Your score is ${score}. Grade: F`);
}