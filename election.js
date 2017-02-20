$(document).ready(function() {
 $.ajax
 url: url: 'https://bb-election-api.herokuapp.com/',
 method: 'Get',
 dataType: 'Json'
}).done(function(data){

    for(var y=0; y < data.candidates.length; y++) {
    $('#list').append('<li> Name: ' + data.candidates[y].name + '</li>')
    $('#list').append('<li> Votes: ' + data.candidates[y].votes + '</li><br>')
    };
  });
});
