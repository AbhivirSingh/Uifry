// Download App btn
const btn = document.querySelector('.readytostart button');
btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = "#f55";
    btn.style.color = "white";
    btn.querySelector('path').style.transition = "0.3s";
    btn.querySelector('path').style.fill = "white";
});
btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.querySelector('path').style.fill = "black";
});

// Grid part
const media = () => {
    let q = matchMedia("(max-width:1100px)");
    const a = document.querySelectorAll('.mainfaq div');
    if (q.matches) {
        for (let i = 0; i < a.length; i++) {
            if (i % 2 == 0) {
                a[i].classList.add('div1');
                a[i].classList.remove('div2');
            }
            else {
                a[i].classList.add('div2');
                a[i].classList.remove('div1');
            }
        }
    }
};
window.onload = media;

// People
const p = document.querySelectorAll('.people div');
p.forEach((d) => {
    d.addEventListener('mouseover', () => {
        if (d.querySelector('img').classList.contains('active') === false) {
            d.style.backgroundColor = 'rgb(255 255 255 / 30%)';
            d.querySelector('img').classList.add('hoverpeople');
        }
    });
});
p.forEach((d) => {
    d.addEventListener('click', () => {
        console.log('hello');
        if (d.querySelector('img').classList.contains('active') === false) {
            d.parentElement.querySelector('.active').classList.remove('active');
            d.querySelector('img').classList.remove('hoverpeople');
            d.querySelector('img').classList.add('active');
        }
    });
});
p.forEach((d) => {
    d.addEventListener('mouseout', () => {
        if (d.querySelector('img').classList.contains('active') === false) {
            d.style.backgroundColor = '#fff8';
            d.querySelector('img').classList.remove('hoverpeople');
        }
    });
});