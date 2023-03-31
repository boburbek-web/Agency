const body = document.querySelector("body"),
  toggle = document.querySelector("#toggle"),
  btn = document.querySelector(".menu"),
  navUL = document.querySelector(".nav__ul"),
  navbar = document.querySelector(".navbar"),
  navFilter = document.querySelectorAll('li.projects_nav_filter'),
  user = document.querySelectorAll('.user'),
  navLinks = document.querySelectorAll(".nav__ul-list--link"),
  cardImage = document.querySelectorAll('.card-image'),
  callActionBox = document.querySelector('.call-action_box'),
  advantagesBoxes = document.querySelectorAll('.advantages_box'),
  ourTeamTitles = document.querySelectorAll('.our_team_title'),
  servicesFluid = document.querySelector(".services_fluid"),
  footerDark = document.querySelector(".footer"),
  footerSocialMedia = document.querySelectorAll(".footer__social-media-link")




  toggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    navbar.classList.toggle("nav");
    servicesFluid.classList.toggle("servicesFluidDark");
    callActionBox.classList.toggle("call-action_box");
  
  
    // Navbar A href Mode START
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
    // Navbar A href Mode End
  
  
    // Our Team Titles START
    ourTeamTitles.forEach(title => {
      title.classList.toggle('our_team_title', 'd-flex', 'flex-column', 'text-center', 'align-items-center', 'p-2');
      if (title.dataset.toggle === 'true') {
        title.classList.toggle('ourTeamTitleDark');
        title.dataset.toggle = 'false';
      } else {
        title.classList.toggle('ourTeamTitleDark');
        title.dataset.toggle = 'true';
      }
    });
    // Our Team Titles END
  
  
    //  Advantages Boxes Dark Mode START
  
    advantagesBoxes.forEach(title => {
      title.classList.toggle('advantages_box');
      if (title.dataset.toggle === 'true') {
        title.classList.toggle('advantagesBoxDark');
        title.dataset.toggle = 'false';
      } else {
        title.classList.toggle('advantagesBoxDark');
        title.dataset.toggle = 'true';
      }
    });
    //  Advantages Boxes Dark Mode END
  
    // Card Image Start 
    cardImage.forEach(e => {
      e.classList.toggle('card-image');
      if (e.dataset.toggle === 'true') {
        e.classList.toggle('cardImageDark');
        e.dataset.toggle = 'false';
      } else {
        e.classList.toggle('cardImageDark');
        e.dataset.toggle = 'true';
      }
    });
    // Card Image END
  
  
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


// Projects Filter

navFilter.forEach(element => {
  element.addEventListener('click', function () {
    clearActive();
    element.classList.add('active');

    let filter = element.dataset.filter;
    console.log(filter);

    user.forEach(e => {
      if (!e.classList.contains(filter)) {
        e.classList.add('hide');
      } else {
        e.classList.remove('hide');
      }
    });

    if (filter === 'all') {
      user.forEach(e => {
        e.classList.remove('hide');
      })
    }
  })
});
function clearActive() {
  const activeLink = document.querySelector('.active');
  activeLink.classList.remove("active");
}
// Projects Filter END

// Blog Swiper START

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  freeMode: true,
  grabCursor: true,
  loop: true,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    300: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 3
    }
  }
});

// Blog Swiper END


// Our Team Swiper STAR

var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  grabCursor: true,
  loop: true,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    300: {
      slidesPerView: 1
    },
    700: {
      slidesPerView: 4
    }
  }
});


