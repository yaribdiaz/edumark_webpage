const wrapper = document.getElementsByClassName('similar-wrapper');
button = document.getElementById('click');
const button2 = document.getElementById('click2');

button.addEventListener('click', clicked);
button2.addEventListener('click', clicked2);
let scroll = 0;

wrapper[0].addEventListener("scroll", function (event) {
  scroll = wrapper[0].scrollLeft;
});

function clicked () {
  scroll = scroll += 500;
  wrapper[0].scrollTo({
    left: scroll,
    behavior: 'smooth'
  });
  scroll = wrapper[0].scrollLeft + 50;
  console.log(wrapper[0].scrollLeft);
}

function clicked2 () {
  scroll = scroll -= 500;
  wrapper[0].scrollTo({
    left: scroll, 
    behavior: 'smooth' 
  });
  scroll = wrapper[0].scrollLeft + 50;
  console.log(wrapper[0].scrollLeft);
}



