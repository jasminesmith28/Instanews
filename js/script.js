$(function () {

var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "82f12f3e4189492f86578cb2d4e6add0"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
  console.log(data.results[0].abstract);
  const abstract = data.results[0].abstract;
  console.log(data.results[0].multimedia[0]);
  const image = data.results[0].multimedia[0];
  console.log(data.results[0].url);
  const url = data.results[0].url;
}).fail(function(err) {
  throw err;
});



});