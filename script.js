$(document).ready(function () {
  var names = ["eternal", "starblazing"];
  var currentIndex = 0;

  // Function to handle name change with fade in/out animations
  function changeName() {
    $("#name").fadeOut(500, function () {
      // Change the name text
      $("#name").text(names[currentIndex]);
      // Fade it back in
      $("#name").fadeIn(500);
    });

    // Move to the next name in the array
    currentIndex = (currentIndex + 1) % names.length;
  }

  // Set an interval to change the name every 2 seconds
  setInterval(changeName, 2000);

  // Initial fade-in for the first name
  $("#name").fadeIn(1000);
});

$(document).ready(function () {
  // Tab click handler for switching between tabs
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

$(document).keypress(function (e) {
  var key = e.which;
  if (key == 46) {
    $("#menu").fadeToggle();
  }
});

const $elem = document.querySelector("#menu");
const mutable = function (e) {
  const h = this.offsetHeight;
  const w = this.offsetWidth;

  const t = this.offsetTop;
  const l = this.offsetLeft;

  const y = t + h - e.pageY;
  const x = l + w - e.pageX;

  const hasMoved = () => !(t === this.offsetTop && l === this.offsetLeft);

  const follow = (e) => {
    this.style.top = `${e.pageY + y - h}px`;
    this.style.left = `${e.pageX + x - w}px`;
  };

  const unfollow = (e) => {
    document.removeEventListener("mousemove", follow);
    document.removeEventListener("mouseup", unfollow);
    // Emit events according to interaction
    if (hasMoved(e)) this.dispatchEvent(new Event(""));
    e.preventDefault();
  };

  if (x > 12 && y > 12) {
    document.addEventListener("mousemove", follow);
    document.addEventListener("mouseup", unfollow);
    e.preventDefault();
  } else {
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", unresize);
    e.preventDefault();
  }
};

// $elem.addEventListener("mousedown", mutable);

$elem.addEventListener("clicked");
$elem.addEventListener("moved");
$elem.addEventListener("resized");

$(document).ready(function () {
  $("#tab-1").fadeIn(1500); // Fade in the first tab on page load
});
