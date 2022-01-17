const innehåll = document.querySelector(".innehåll");

fetch("./images.json")
  .then((svar) => svar.json())

  .then((data) => {
    const imageData = data;
    document.getElementById("bilder").innerHTML = `
      ${imageData
        .map(function (bild) {
          return `
              <div class="images">
                  <img class="bild" src="${bild.url}" data-description="${bild.description}">
              </div>        
          `;
        })
        .join("")}

      `;
  });

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("bild")) {
    let src = e.target.getAttribute("src");
    document.getElementById("imageData").src = src;
    innehåll.style.display = "block";

    let popDesc = e.target.dataset.description;
    document.getElementById("contentText").innerHTML = popDesc;
  }
});

closeBtn.onclick = function () {
  innehåll.style.display = "none";
};
