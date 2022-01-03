let showBtn = document.getElementById("Learn-more") ;
let showPara = document.getElementById("show-more") ;
let projBtn1 = document.getElementById('btn-project1')
let msg1 = document.getElementById("msg1") ;
let projBtn2 = document.getElementById('btn-project2')
let msg2 = document.getElementById("msg2") ;
let projBtn3 = document.getElementById('btn-project3')
let msg3 = document.getElementById("msg3") ;
let servBtn = document.getElementById("Getbtn") ;
let workPara = document.getElementById("Work-text") ;


// Show more
function showMore() {
    showPara.style.display = "block" ;
    showBtn.innerText = "Hide" ;
}

// Hide more 

function hideMore() {
    showPara.style.display = "none" ;
    showBtn.innerText = "Show more" ;
}

// Add action to btn 

showBtn.addEventListener('click' , showMore)
showBtn.addEventListener('dblclick' , hideMore)

// Show message in projects 

projBtn1.onclick =()=> {
    msg1.style.display = "block" ;
}

projBtn2.onclick =()=> {
    msg2.style.display = "block" ;
}

projBtn3.onclick =()=> {
    msg3.style.display = "block" ;
}

servBtn.onclick =()=> {
    workPara.style.display = "block" ;
}


// a lot of repeat in this code 