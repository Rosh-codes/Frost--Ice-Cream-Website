
  const veganBtn = document.getElementById("vegan");
  const chocoBtn = document.getElementById("choco");
  const fruityBtn = document.getElementById("fruity");
  const seasonalBtn = document.getElementById("seasonal");

  
  const veganFlavours = document.querySelector(".veganFlavours");
  const chocoFlavours = document.querySelector(".choco-flavours");
  const fruityFlavours = document.querySelector(".fruity-flavours");
  const seasonalFlavours = document.querySelector(".seasonalFlavours");


  function showCategory(button, section) {

    veganBtn.classList.remove("active");
    chocoBtn.classList.remove("active");
    fruityBtn.classList.remove("active");
    seasonalBtn.classList.remove("active");


    veganFlavours.classList.add("hidden");
    chocoFlavours.classList.add("hidden");
    fruityFlavours.classList.add("hidden");
    seasonalFlavours.classList.add("hidden");
    button.classList.add("active");

    section.classList.remove("hidden");
  }

  veganBtn.addEventListener("click", function () {
    showCategory(veganBtn, veganFlavours);
  });

  chocoBtn.addEventListener("click", function () {
    showCategory(chocoBtn, chocoFlavours);
  });

  fruityBtn.addEventListener("click", function () {
    showCategory(fruityBtn, fruityFlavours);
  });

  seasonalBtn.addEventListener("click", function () {
    showCategory(seasonalBtn, seasonalFlavours);
  });


  