// toggle = document.getElementById('toggle')
// open = document.getElementById('open')
// modal = document.getElementById('model')
// close = document.getElementById('close')


// toggle.addEventListener('click', () => {
//     document.body.classList.toggle('show-nav')
// })

// open.addEventListener('click', () => {
//     modal.classList.add('show-modal')
// })

// close.addEventListener('click', () => {
//     modal.classList.remove('show-modal')
// })

// window.addEventListener('click', (e) => {
//     if (e.target == modal) {
//         modal.classList.remove
//     }
// })
let toggle = document.getElementById('toggle');
let open = document.getElementById('open');
let modal = document.getElementById('modal');
let close = document.getElementById('close');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

open.addEventListener('click', () => {
    modal.classList.add('show-modal');
});

close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal');
    }
});
