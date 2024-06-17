let navlist = document.querySelectorAll(".navlist li a");

navlist.forEach(item =>{
    let characters = item.textContent.split("");
    item.textContent="";
    characters.forEach((char, index)=>{
        index +=1;
        let span = document.createElement("span");
        let delay = index / 15;
        
        let charUp = document.createElement("span");
        charUp.textContent = char;
        charUp.style.transitionDelay = `${delay}s`;
        charUp.classList.add("up");
        span.append(charUp);

        let charDown = document.createElement("span");
        charDown.textContent = char;
        charDown.style.transitionDelay = `${delay}s`;
        charDown.classList.add("down");
        span.append(charDown);

        item.append(span);
    })
})

// active hamburger menu

let list = document.querySelector(".navlist")
let menuIcon = document.querySelector(".menuIcon");
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    list.classList.toggle("activeMenu");
})

let menuColapse = document.querySelectorAll(".sections");
menuColapse.forEach((element) => {
    element.onclick = function () {
        menuIcon.classList.toggle("active");
        list.classList.toggle("activeMenu");
    }
})


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});