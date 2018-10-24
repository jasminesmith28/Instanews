  
  $('select').on('change', function(){
    var section = $('select').val();
    var url = "https://api.nytimes.com/svc/topstories/v2/"+section +".json";
    url += '?' + $.param({
        'api-key': "82f12f3e4189492f86578cb2d4e6add0"
    });

  
$('header').toggleClass("reduce");
$('body').toggleClass("shift");

$.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
  $('.article_section').empty();
  for(var i=0; i<12; i++){
  var abstract = data.results[i].abstract;
  console.log(abstract);
  var image = data.results[i].multimedia[4].url;
  console.log(image);
  var url = data.results[i].url;
  console.log(url);
  
  $('.article_section').append('<section class="articleone"><a href="'+url+'"class="link"><h2 class="description">'+abstract+'</h2></a></section>');
  $('.articleone').last().css("background-image", 'url('+image+')');
}

}).fail(function(err) {
  throw err;
});

})

