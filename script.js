document.addEventListener("DOMContentLoaded", () => {
  // Insert navigation into the page
  const navbarHTML = `
  <ul>
  <li class="nav-link"><a href="index.html">projekt</a></li>

  <li class="nav-link"><a href="om.html">om</a></li>
  
</ul>
  `;


  // Insert correct navbar if container exists
  if (document.getElementById("navbar-container")) {
    document.getElementById("navbar-container").innerHTML = navbarHTML;
  }


  // Insert footer
  const footerHTML = `
  
  <div class="footer-container">
  
  <div class="footer-left">
  <img src="images/initials.svg">
   </div>

   <div class="footer-right">
   <a class="footer-icon" href="https://www.linkedin.com/in/malin-bengtsson-69816b146/" target="_blank"><img src="images/inbug-white.png"></a>
    <p> <a href="mailto:malinxbengtsson@hotmail.com">malinxbengtsson@hotmail.com</a></p>
     <p>&copy; 2026 Malin Bengtsson</p>
   
  </div>
</div>

  
  
  `;
  if (document.getElementById("footer-container")) {
    document.getElementById("footer-container").innerHTML = footerHTML;
  };


});




  // Wait for navigation to be added before selecting elements
//   const sections = document.querySelectorAll("section:not(.intro)");
//   const menuLinks = document.querySelectorAll(".nav-link a");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           menuLinks.forEach((link) => {
//             link.classList.toggle(
//               "active",
//               link.getAttribute("href").substring(1) === entry.target.id
//             );
//           });
//         }
//       });
//     },
//     { threshold: 0.6 }
//   );

//   sections.forEach((section) => observer.observe(section));
// });




// window.addEventListener("scroll", function () {
//   const header = document.querySelector(".banner-small"); // Select the header
//   if (window.scrollY > 250) {
//     header.classList.add("show"); // Add class when scrolled
//   } else {
//     header.classList.remove("show"); // Remove class when scrolled back up
//   }
// });

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     }
//   });
// }, {
//   threshold: 0.5 // triggar när 50% av elementet syns
// });

// // Targeta den högra texten
// const rightText = document.querySelector('.slide-in-right');
// if (rightText) {
//   observer.observe(rightText);
// }

// const leftText = document.querySelector('.slide-in-left');
// if (leftText) {
//   observer.observe(leftText);
// }