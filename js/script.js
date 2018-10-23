$(function () {

var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "82f12f3e4189492f86578cb2d4e6add0"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
  $('.abstract').empty();
  for(var i=0; i<12; i++){
  var abstract = data.results[0].abstract;
  console.log(abstract);
  var image = data.results[0].multimedia[4].url;
  console.log(image);
  var url = data.results[0].url;
  console.log(url);
  
  $('.articleone').append('<section><a href="'+url+'"class="link"><img src="'+image+'" class="articleimage"><h2 class="description">'+abstract+'</h2></a></section>');
}

}).fail(function(err) {
  throw err;
});
});
