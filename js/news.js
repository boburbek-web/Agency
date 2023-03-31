const body = document.querySelector("body"),
  toggle = document.querySelector("#toggle"),
  btn = document.querySelector(".menu"),
  navbar = document.querySelector(".navbar"),
  navUL = document.querySelector(".nav__ul"),
  navLinks = document.querySelectorAll(".nav__ul-list--link"),
  footerDark = document.querySelector(".footer"),
  newsAboutLeft=document.querySelector('.news_about_left'),
  newsAboutRight=document.querySelectorAll('.news_about_card_right'),
  footerSocialMedia = document.querySelectorAll(".footer__social-media-link")



  toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    navbar.classList.toggle("nav");
  
  
    // Navbar A href Mode START

    // Navbar A href Mode End
  
    navLinks.forEach(links => {
        links.classList.toggle('text-dark');
        if (links.dataset.toggle === 'true') {
          links.classList.toggle('text-white');
          links.dataset.toggle = 'false';
        } else {
          links.classList.toggle('text-white');
          links.dataset.toggle = 'true';
        }
      });
    
      newsAboutLeft.setAttribute('class', "news_about_left bg-white p-4 my-4");
      if (newsAboutLeft.getAttribute('data-toggle') === 'true') {
        newsAboutLeft.setAttribute('class', "news_about_left bg-dark p-4 my-4");
        newsAboutLeft.setAttribute('data-toggle', 'false');
      } else {
        newsAboutLeft.setAttribute('data-toggle', 'true');
        newsAboutLeft.setAttribute('class', "news_about_left bg-white p-4 my-4");
    
      }
    
      newsAboutRight.forEach(e => {
        e.classList.toggle('bg-dark');
        if (e.dataset.toggle === 'true') {
          e.classList.toggle('bg-white');
          e.dataset.toggle = 'false';
        } else {
          e.classList.toggle('bg-white');
          e.dataset.toggle = 'true';
        }
      });
  
    // Footer Dark Mode START
    footerDark.setAttribute('class', "footerDark mt-5 p-4");
    if (footerDark.getAttribute('data-toggle') === 'true') {
  
      footerDark.setAttribute('class', "footerDark mt-5 p-4");
      footerDark.setAttribute('data-toggle', 'false');
    } else {
      footerDark.setAttribute('data-toggle', 'true');
      footerDark.setAttribute('class', "footer mt-5 p-4");
  
    }
  
      // Footer Social Media START
      footerSocialMedia.forEach(links => {
        links.classList.toggle('text-dark');
        if (links.dataset.toggle === 'true') {
          links.classList.toggle('text-white');
          links.dataset.toggle = 'false';
        } else {
          links.classList.toggle('text-white');
          links.dataset.toggle = 'true';
        }
      });
      // Footer Social Media END
    
  });
  // Footer Dark Mode END




// Dark mode END

// Navbar menu responsive START

btn.addEventListener("click", () => {
  navUL.classList.toggle("show");

  btn.setAttribute('class', "bi bi-x d-xl-none d-block menu");

  if (btn.getAttribute('data-toggle') === 'true') {

    btn.setAttribute('class', "bi bi-x d-xl-none d-block menu");
    btn.setAttribute('data-toggle', 'false');
  } else {
    btn.setAttribute('data-toggle', 'true');
    btn.setAttribute('class', "bi bi-list d-xl-none d-block menu");

  }

})
// Navbar menu responsive END

