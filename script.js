function checkPassword() {
    const input = document.getElementById('passInput').value;
    if (input.trim() === "01/25/2020") {
        document.getElementById('page1').classList.remove('active');
        document.getElementById('page2').classList.add('active');
        window.scrollTo(0,0);
    } else {
        document.getElementById('errorMsg').style.display = 'block';
    }
}

function goToQuestion() {
    document.getElementById('page2').classList.remove('active');
    document.querySelector('.container').style.display = 'none';
    document.getElementById('page3').classList.add('active');
    window.scrollTo(0, 0);
}

function moveButton() {
    const btn = document.getElementById('noEmoji');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function celebrate() {
    document.getElementById('page3').classList.remove('active');
    document.getElementById('page4').classList.add('active');
}

const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.innerHTML = '☀️'; 
    } else {
        toggleBtn.innerHTML = '🌙'; 
    }
});