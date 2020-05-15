//$("button").on("click", function () {
//var ### = #######;
var queryURL =
  "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=75Mjorzdv1647cioSWc0tteOxTcAkjbp" +
  //   person +
  //   "&api-key=75Mjorzdv1647cioSWc0tteOxTcAkjbp";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
