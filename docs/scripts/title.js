function changingTitle() {
    let title = document.getElementById("title");
    let arr = ["Dev", "Magician", "ML", "JS", "Python", "Comics", "Nerd", "Books", "Workouts", "Sup?"];
    let i = 0, howManyTimes = arr.length;

    function loopThrough() {
        title.innerHTML = arr[i];
        i++;
        if (i === arr.length) {
            i = 0
        }
        if (i < howManyTimes) {
            setTimeout(loopThrough, 500);
        }
    }
    loopThrough();
}
