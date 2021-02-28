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
        <p style=" 
        display: none;color: white;
        font-size: 20px;
        position: absolute;
        top: 30%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
        text-shadow: 0 2px black;
        " 
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
