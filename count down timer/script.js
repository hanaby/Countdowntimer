const startingMin = 10;
let time = startingMin * 60;

const countDown = document.getElementById('countdown');

setInterval(updateCountDown,1000);//every 1000ms 

function updateCountDown(){
    const minutes =  Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    /*if we dont include the above line(line 12) then when seconds get under 10 they wouldnt look
    like the exact time format(for instance: we wouldnt want 10:9 we would want 10:09)
    */
    countDown.innerHTML = `${minutes}:${seconds}`;

    time--;
}