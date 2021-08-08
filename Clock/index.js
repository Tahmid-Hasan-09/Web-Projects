setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    // console.log(d);
    // console.log(htime);
    // console.log(mtime);
    // console.log(stime);

    let srotation = 6*stime;
    let mrotation = 6*mtime;
    let hrotation = 30*htime + mtime/2;

    let hour = document.getElementById('hour-hand');
    let second = document.getElementById('second-hand');
    let minute = document.getElementById('minute-hand');

    second.style.transform = `rotate(${srotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    hour.style.transform = `rotate(${hrotation}deg)`;
}, 1000);