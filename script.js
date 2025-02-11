// Import jQuery (assuming you're using a CDN)
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

$(document).ready(() => {
  // Smooth scroll for navigation links
  $("a.nav-link").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault()
      const hash = this.hash
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800,
      )
    }
  })

  // Navbar background change on scroll
  $(window).scroll(() => {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("navbar-scrolled")
    } else {
      $(".navbar").removeClass("navbar-scrolled")
    }
  })

  // Add hover animation for interactive elements
  $(".nav-link, .login-btn").hover(
    function () {
      $(this).addClass("hover-effect")
    },
    function () {
      $(this).removeClass("hover-effect")
    },
  )

  // Mobile menu collapse on link click
  $(".navbar-nav>li>a").on("click", () => {
    $(".navbar-collapse").collapse("hide")
  })

  // Animate hero elements on page load
  setTimeout(() => {
    $(".hero-content").addClass("animate-in")
    $(".device-mockups").addClass("animate-in")
  }, 300)
})

import $ from "jquery" // Import jQuery

$(document).ready(() => {
  // Smooth hover effect for engagement cards
  $(".engagement-card").hover(
    function () {
      $(this).find(".card-icon").css("transform", "scale(1.1)")
    },
    function () {
      $(this).find(".card-icon").css("transform", "scale(1)")
    },
  )

  // Launch button click animation
  $(".launch-button").click(function () {
    $(this).addClass("clicked")
    setTimeout(() => {
      $(this).removeClass("clicked")
    }, 200)
  })

  // Add smooth transition for card icons
  $(".card-icon").css("transition", "transform 0.3s ease")
})


$(document).ready(() => {
  // Initialize Bootstrap Carousel
  $("#caseStudiesCarousel").carousel({
    interval: 5000, // Change slides every 5 seconds
    touch: true, // Enable touch swipe on mobile
  })

  // Add smooth transition for case study cards
  $(".case-study-card").css("transition", "transform 0.3s ease")

  // Hover effect for case study cards
  $(".case-study-card").hover(
    function () {
      $(this).css("transform", "translateY(-5px)")
    },
    function () {
      $(this).css("transform", "translateY(0)")
    },
  )

  // Custom navigation with keyboard
  $(document).keydown((e) => {
    if (e.keyCode == 37) {
      // Left arrow
      $("#caseStudiesCarousel").carousel("prev")
    }
    if (e.keyCode == 39) {
      // Right arrow
      $("#caseStudiesCarousel").carousel("next")
    }
  })

  // Add touch swipe support
  let touchStartX = 0
  let touchEndX = 0

  $(".carousel").on("touchstart", (event) => {
    touchStartX = event.originalEvent.touches[0].clientX
  })

  $(".carousel").on("touchend", (event) => {
    touchEndX = event.originalEvent.changedTouches[0].clientX
    handleSwipe()
  })

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      $("#caseStudiesCarousel").carousel("next")
    }
    if (touchEndX > touchStartX + 50) {
      $("#caseStudiesCarousel").carousel("prev")
    }
  }
})

// Import jQuery (assuming you're using a CDN)
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

$(document).ready(() => {
  // Add animation to testimonial cards on scroll
  $(window).scroll(() => {
    $(".testimonial-card").each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass("animate")
      }
    })
  })

  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Add hover effect to testimonial cards
  $(".testimonial-card").hover(
    function () {
      $(this).find(".star-rating").css("transform", "scale(1.1)")
    },
    function () {
      $(this).find(".star-rating").css("transform", "scale(1)")
    },
  )

  // Add smooth transition for star ratings
  $(".star-rating").css("transition", "transform 0.3s ease")
})

// Import jQuery
import $ from "jquery"

$(document).ready(() => {
  // Add animation on scroll for team members
  $(window).scroll(() => {
    $(".team-member").each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass("animate")
      }
    })
  })

  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Add hover effect for team member photos
  $(".team-member").hover(
    function () {
      $(this).find(".member-photo").css("transform", "translateY(-5px)")
    },
    function () {
      $(this).find(".member-photo").css("transform", "translateY(0)")
    },
  )

  // Add smooth transition for member photos
  $(".member-photo").css("transition", "transform 0.3s ease")
})


$(document).ready(() => {
  // Form submission handling
  $("#contactForm").on("submit", function (e) {
    e.preventDefault()

    // Get form values
    const formData = {
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      email: $("#email").val(),
      company: $("#company").val(),
      message: $("#message").val(),
    }

    // Add loading state to button
    const $submitButton = $(this).find(".submit-button")
    const originalText = $submitButton.html()
    $submitButton.html('<span class="spinner-border spinner-border-sm me-2"></span>Enviando...')
    $submitButton.prop("disabled", true)

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log("Form Data:", formData)

      // Reset form
      this.reset()

      // Reset button state
      $submitButton.html(originalText)
      $submitButton.prop("disabled", false)

      // Show success message (customize as needed)
      alert("Mensagem enviada com sucesso!")
    }, 1500)
  })

  // Input animation on focus
  $(".form-control")
    .focus(function () {
      $(this).parent(".form-group").addClass("focused")
    })
    .blur(function () {
      if (!$(this).val()) {
        $(this).parent(".form-group").removeClass("focused")
      }
    })
})

$(document).ready(() => {
  // Get the current year
  const currentYear = new Date().getFullYear()

  // Update the year in the footer
  $(".footer-text").html((index, html) => html.replace("2025", currentYear))

  // Add a subtle animation on hover
  $(".company-name").hover(
    function () {
      $(this).css("color", "#ff5722")
    },
    function () {
      $(this).css("color", "#1a1a1a")
    },
  )
})

