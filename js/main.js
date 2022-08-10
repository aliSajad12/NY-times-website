document.getElementById('showMenu').addEventListener('click', showMenu);
document.getElementById('hideMenu').addEventListener('click', hideMenu);

function showMenu(){
    document.getElementById('navMenu').style.display = "block";
    document.getElementById('hideMenu').style.display = "block";
    document.getElementById('showMenu').style.display = "none";
}

function hideMenu(){
    document.getElementById('navMenu').style.display = "none";
    document.getElementById('hideMenu').style.display = "none";
    document.getElementById('showMenu').style.display = "block";
}

