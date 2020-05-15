//$("button").on("click", function () {
//var ### = #######;

var APIkey = "75Mjorzdv1647cioSWc0tteOxTcAkjbp";
var userIput = ###
var numberOfRecords = ###
var startDate = ###
var finishDate = ###
var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  userIput +
  "&api-key=" +
  APIkey;

//   person +
//   "&api-key=75Mjorzdv1647cioSWc0tteOxTcAkjbp";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
