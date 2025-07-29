let firstSlash = document.querySelector(".header-txt .slash")
let contactBtn = document.querySelector(".contact-btn")
let submit = document.querySelector(".button")
let form = document.querySelector(".firstForm")
firstSlash.style.width = '600px'
contactBtn.onclick = ()=>{
    location.href = '#contact'
}
form.onsubmit = (e) => {
    e.preventDefault();
  }
  
  submit.onclick = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "mail.php", true);
    xhr.onload = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let data = xhr.response;
          console.log(data)
        }
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
  }