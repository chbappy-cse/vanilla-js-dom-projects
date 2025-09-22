document.getElementById('currentYear').textContent = new Date().getFullYear();

const navBar = document.querySelector('nav');
const navList = document.querySelector('ul');
const sideMenu = document.querySelector('#sideMenu');

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if (scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');

        navList.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');

        navList.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
})


// Light mode & dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light'; 
    }
}


// Contact from js

document.getElementById('myForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent form from redirecting

    const form = e.target;
    const formData = new FormData(form);
    const btnText = document.getElementById('btnText');
    const spinner = document.getElementById('spinner');
    
    // Show spinner and hide button text
    btnText.classList.add('hidden');
    spinner.classList.remove('hidden');

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData
        });

        const result = await response.json();
        if (response.ok) {
            document.getElementById('result').innerText = 'Submitted successfully!';
        } else {
            document.getElementById('result').innerText = 'Error submitting form: ' + result.message;
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error submitting form: ' + error.message;
    } finally {
        // Hide spinner and show button text
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');
    }
});


// Animation

