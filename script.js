let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

function hide() {
       document.getElementById('section-one').style.display = 'none'
     }
function show() {
       document.getElementById('section-one').style.display = 'block'
     }
