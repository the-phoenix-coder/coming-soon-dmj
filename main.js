const txt = 'Coming Soon';
let countingUp = true;
let count = 0;

setInterval(function() {
    if (count > txt.length) {
        setTimeout(() =>
        {
            countingUp = false;
            count -= 2;
        }, 200)
    }
    else if (count < 0)
    {
        countingUp = true;
        count += 2;
    }

    document.querySelector('main h1').innerHTML = txt.slice(0, count);
    count += countingUp ? 1 : -1;
}, 200)