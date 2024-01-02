const hairTreatmentValue = [
  "Creative Coloring - Price on color request",
  "Scalp Treatment - Rs.2500.00",
  "Moisture Treatment - Rs.2000.00",
  "Keratin - Rs.3000.00",
  "Glossing Treatment - Rs.2000.00",
];

const hairStyles = [
  "Feather Cut - Rs.700.00 | 1000.00",
  "Layer Cut - Rs.700.00 | 1000.00",
  "Fringe Cut - Rs.500.00",
  "Butterfly Cut - Rs.1000.00",
  "Taper Cut - Rs.500.00",
  "Curly Cut - Rs.700.00",
  "Professional Cut - Rs.1000.00",
  "Slicked Back Cut - Rs.800.00",
  "Thick Short Cut - Rs.1200.00",
];

function navClick() {
  var sidenav = document.getElementById("sidenav");
  var menuImg = document.getElementById("menuImg");

  if (sidenav.style.right == "-250px") {
    sidenav.style.right = "0";
    menuImg.src = "images/close.png";
  } else {
    sidenav.style.right = "-250px";
    menuImg.src = "images/menu.png";
  }
}

function servicecall(selectedVal) {
  switch (selectedVal) {
    case "hair":
      document.getElementById("homepage").style.display = "none";
      document.getElementById("servicePage").style.display = "block";
      document.getElementById("hair-services").style.display = "block";
      break;
    case "skin":
      document.getElementById("homepage").style.display = "none";
      document.getElementById("servicePage").style.display = "block";
      document.getElementById("skin-services").style.display = "block";
      break;
    case "nails":
      document.getElementById("homepage").style.display = "none";
      document.getElementById("servicePage").style.display = "block";
      document.getElementById("nail-services").style.display = "block";
      break;
    case "spa":
      document.getElementById("homepage").style.display = "none";
      document.getElementById("servicePage").style.display = "block";
      document.getElementById("spa").style.display = "block";
      break;
    case "bridal":
      document.getElementById("homepage").style.display = "none";
      document.getElementById("servicePage").style.display = "block";
      document.getElementById("bridal").style.display = "block";
      break;
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function backClick() {
  document.getElementById("servicePage").style.display = "none";
  document.getElementById("homepage").style.display = "block";
  document.getElementById("bridal").style.display = "none";
  document.getElementById("spa").style.display = "none";
  document.getElementById("nail-services").style.display = "none";
  document.getElementById("skin-services").style.display = "none";
  document.getElementById("hair-services").style.display = "none";

  var my_element = document.getElementById("services");

  my_element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

function showDetails(index) {
  var ele = document.getElementById("hairTreat").children;
  ele[index].attributes.dataVal.value = hairTreatmentValue[index];
  console.log(ele.children);
}

function showStylingDetails(index) {
  var ele = document.getElementById("hairStyle").children;
  ele[index].attributes.dataVal.value = hairStyles[index];
  console.log(ele.children);
}

function showcontent(val) {
  var card1 = document.getElementById("bridalCard1");
  var card2 = document.getElementById("bridalCard2");
  var content1 = document.getElementById("bridalContent1");
  var content2 = document.getElementById("bridalContent2");

  if (val == 1) {
    card1.style.display = "none";
    content1.style.display = "flex";
    card2.style.display = "flex";
    content2.style.display = "none";
  } else {
    {
      card2.style.display = "none";
      content2.style.display = "flex";
      card1.style.display = "flex";
      content1.style.display = "none";
    }
  }
}

function hidecontent(val) {
  var card1 = document.getElementById("bridalCard1");
  var card2 = document.getElementById("bridalCard2");
  var content1 = document.getElementById("bridalContent1");
  var content2 = document.getElementById("bridalContent2");

  if (val == 1) {
    card1.style.display = "flex";
    content1.style.display = "none";
  } else {
    {
      card2.style.display = "flex";
      content2.style.display = "none";
    }
  }
}

function book() {
  alert("Your visit is confirmed!!! Confirmation will be sent to your mail");
}
