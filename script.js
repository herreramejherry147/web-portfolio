var isDark = false;

function toggleTheme() {
  const styleBox = document.getElementById("themeStyle");
  const button = document.getElementById("themeBtn");

  if (isDark === false) {
    let darkCss = "<style>";
    darkCss += "#home { background: #1e3a8a; }";
    darkCss += "body { background-color: #0b1530; color: #e6eefc; }";
    darkCss += ".avatar { border: none; background-color: #3b5bdb; color: #ffffff; border-bottom: 3px solid #8ec5ff; border-right: 3px solid #8ec5ff;}";
    darkCss += ".card { background-color: #12214a; border: 2px solid #6ea8ff; }";
    darkCss += "h2 { color: #8ec5ff; }";
    darkCss += "hr {   width: 100%; height: 3px;background-color: #8ec5ff; border: none;}";
    darkCss += "a { color: #8ecbff; }";
    darkCss += ".item { background-color: #1b2f63; border-bottom: 3px solid #8ec5ff;}";
    darkCss += ".item:hover { background-color: #243d7a; }";
    darkCss += ".ph { background-color: #2b4585; color: #e6eefc; border-bottom: 3px solid #8ec5ff;}";
    darkCss += "#navbar { background-color: #07102a; }";
    darkCss += ".btn { background-color: #3b82f6; color: #ffffff; border: none; border-bottom: 3px solid #8ec5ff; }";
    darkCss += ".btn:hover { background-color: #60a5fa; }";
    darkCss += "th, td { border: 2px solid #6ea8ff; }";
    darkCss += "th { background-color: #3b82f6; color: #ffffff; }";
    darkCss += "td { background-color: #16295a; color: #e6eefc; }";
    darkCss += ".menubtn { background-color: #07102a }";
    darkCss += ".menu a:hover { background-color: #07102a; color: #22c55e; }";
    darkCss += ".menubtn:hover { color: #22c55e;}";
    darkCss += "#footer { background-color: #07102a; color: #e6eefc; }";
    darkCss += "#footer a { color: #8ec5ff; }";
    darkCss += "#footer h3 { color: #8ec5ff; }";
    darkCss += ".submenu { background-color: #1e3a8a; }";
    darkCss += ".submenu a:hover {color: #22c55e; }";
    darkCss += "#themeBtn { background-color: #14532d; }";
    darkCss += "</style>";
    styleBox.innerHTML = darkCss;
    button.innerHTML = "&#9728;&#65039;";
    isDark = true;
  } else {
    styleBox.innerHTML = "";
    button.innerHTML = "&#127769;"; 
    isDark = false;
  }
}

function sayHello() {
  window.alert("Hi! Thanks for visiting my portfolio. Feel free to see what's inside my portfolio, and if you have a concern don't hesitate to contact me below!");
}

function printPage() {
  window.print();
}

var othersOpen = false;

function toggleOthers() {
  const menuBox = document.getElementById("othersMenu");

  if (othersOpen === false) {
    let links = '<div class="submenu">';
    links += '<a href="#skills">Skills</a>';
    links += '<a href="#education">Education</a>';
    links += '<a href="#awards">Awards</a>';
    links += '<a href="#hobbies">Hobbies</a>';
    links += '<a href="#experience">Experience</a>';
    links += '<a href="#projects">Projects</a>';
    links += '</div>';
    menuBox.innerHTML = links;
    othersOpen = true;
  } else {
    menuBox.innerHTML = "";
    othersOpen = false;
  }
}
