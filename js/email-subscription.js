const scriptURL = 'https://script.google.com/macros/s/AKfycbwEJWFAdSpxSFYBGKiw_35Aa-9B_RC9MEONI-o7RvTHeS6Rg9Coh3H8-44AGsdHXhyspg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    // .then(response => console.log('Success!', response))
    .then(response => {
        msg.innerHTML = 'Thank You For Subscribing!';
        setTimeout(()=>{
            msg.innerHTML = '';
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})