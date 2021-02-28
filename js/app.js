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
        `<div id=${image.id}  class="col-3 portfolio-image"> 
          <img class="img-fluid" src="assets/portfolio/${image.imageName}" alt="" /> 
          <div class="overlay">
            <p class="portfolio-text" id=${image.idText} >
              ${image.imageText}
            </p>
          </div> 
        </div>`
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
  // $("#contact-form").submit(function (e) {
  //   e.preventDefault();
  //   let name = $("#name").val();
  //   alert(`${name} your message has been succefully delivered`);
  // });
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  $("#contact-form").submit(function (event) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name,
      }),
    })
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  });
});
