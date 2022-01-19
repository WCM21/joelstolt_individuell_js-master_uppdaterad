const popup = document.querySelector(".popup");


fetch("joelstolt_individuell_js-master/images.json")
  .then((svar) => svar.json())

  .then((data) => {
    const imageData = data;
    const imageContainer = document.getElementById("bilder");

    imageData.forEach(image => {
      imageContainer.innerHTML += `
      <div class="images">
          <img class="bild" src="${image.url}" data-description="${image.description}" />
      </div>
      `;
    });

  });

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("bild")) {
    let src = e.target.getAttribute("src");
    document.getElementById("imageData").src = src;
    popup.style.display = "block";

    let popDesc = e.target.dataset.description;
    document.getElementById("contentText").innerHTML = popDesc;
  }
});

const closeBtn = document.querySelector('#closeBtn');
closeBtn.addEventListener('click', function () {
  popup.style.display = "none";
});
