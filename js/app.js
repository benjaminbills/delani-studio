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
});
