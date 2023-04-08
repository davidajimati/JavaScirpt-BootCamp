let grades = [100, 50, 90, 60, 80, 70]

grades = grades.sort(ascendingSort);
console.log(grades);

function descendingSort(x, y) {
    return y - x;
}

function ascendingSort(x, y) {
    return x - y;
}