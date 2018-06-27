var person = {
    name: 'Mateo',
    subname: 'Pośpiech',
    age: '26'
};
console.log(person.name);

/***NAV Mobile***/
const navButton = document.getElementById('icon-nav');
const mainNav = document.getElementById('header__center');

navButton.addEventListener('click', addActive);

function addActive(){
    
    console.log('asd');
    mainNav.classList.toggle('active');
    navButton.classList.toggle('icon-nav-Active');
}

/***END NAV Mobile***/