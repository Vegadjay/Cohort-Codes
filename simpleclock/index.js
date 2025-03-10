function updateTime() {
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; 
    hours = hours.toString().padStart(2, '0');

    document.getElementById('hour').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('second').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
}

updateTime();

setInterval(updateTime, 1000);