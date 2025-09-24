    function opentab(tabName) {
    var tabcontents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    var tablinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    document.getElementById(tabName).classList.add("active-tab");

    event.currentTarget.classList.add("active-link");
}

const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});

const form = document.querySelector("#contact form");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  const response = await fetch("https://formspree.io/f/your-endpoint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Failed to send message. Try again.");
  }
});
