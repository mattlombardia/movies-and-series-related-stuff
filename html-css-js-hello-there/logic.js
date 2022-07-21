const btn = document.querySelector('#btn');
const img = document.querySelector('#img');

btn.addEventListener('click', ()=>{
    if(img.style.display == 'block') {
        img.style.display = 'none';
    } else {
        img.style.display = 'block';
    }
});
