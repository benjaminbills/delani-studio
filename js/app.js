$(document).ready(function () {
  let showContents = ["#show-design", "#show-development", "#show-pm"];

  let hideContents = ["#hide-design", "#hide-development", "#hide-pm"];

  for (let i = 0; i < hideContents.length; i++) {
    $(hideContents[i]).click(function () {
      $(hideContents[i]).hide();
      $(showContents[i]).show();
    });
  }
  for (let i = 0; i < showContents.length; i++) {
    $(showContents[i]).click(function () {
      $(hideContents[i]).show();
      $(showContents[i]).hide();
    });
  }
  $.getJSON("imageData.json", function (data) {
    $.each(data, function (i, image) {
      $("div#portfolio").append(
        `<div id=${image.id}  class="col-3 portfolio-image"> <img class="img-fluid" src="assets/portfolio/${image.imageName}" alt="" /> <div class="overlay">
        <p class="portfolio-text" 
        id=${image.idText} >${image.imageText}</p>
      </div> </div>`
      );
      $(`#${image.id}`)
        .mouseenter(function () {
          $(`#${image.idText}`).show();
        })
        .mouseleave(function () {
          $(`#${image.idText}`).hide();
        });
    });
  });
});
