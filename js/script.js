// PoP on reload  

// Get elements
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.getElementById("submitBtn");

// Show modal on page load
window.onload = () => {
  modal.classList.add("show");
};

// Close on submit
submitBtn.addEventListener("click", () => {
  const name = document.getElementById("userName").value;
  if (name.trim() !== "") {
    alert("Welcome, " + name + "!");
    modal.classList.remove("show");
  } else {
    alert("Please enter your name.");
  }
});

// Close on X click
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});




// navbar section here 

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navbar.style.transition = "1s ease-in-out"
});

//   carosel section here 

const slides = document.querySelector('.slides');
const dots = document.querySelector('.dots');
let index = 0;

[...slides.children].forEach((_, i) => {
  const d = document.createElement('span');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.onclick = () => show(i);
  dots.appendChild(d);
});

function show(i) {
  index = (i + slides.children.length) % slides.children.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.querySelectorAll('.dot').forEach((d, j) => d.classList.toggle('active', j === index));
}

document.querySelector('.next').onclick = () => show(index + 1);
document.querySelector('.prev').onclick = () => show(index - 1);
setInterval(() => show(index + 1), 5000);


// scroll to top 
let btn = document.getElementById("scrollTopBtn");

window.onscroll = () => btn.style.display = window.scrollY > 100 ? "block" : "none";

btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
