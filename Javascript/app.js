let bars = document.getElementById("hamburger")
let close = document.getElementById("close")
let Items = document.getElementById("Items");
close.style.display = "none";
bars.addEventListener("click",()=>{
    Items.style.right = "0"
    bars.style.display = "none";
    close.style.display = "block";
})

close.addEventListener("click",()=>{
    Items.style.right = "-250px"
    bars.style.display = "block";
    close.style.display = "none";
})