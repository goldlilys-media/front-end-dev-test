'use strict';

var comments = [
  {'name':'Vito Corleone','comment':'I&rsquo;m gonna make him an offer he can&rsquo;t refuse.','timestamp':'69379200'},
  {'name':'Terry Benedict','comment':'Congratulations... You&rsquo;re a dead man!','timestamp':'1007683200'},
  {'name':'Jessica Rabbit','comment':'I&rsquo;m not bad. I&rsquo;m just drawn that way.','timestamp':'583113600'},
  {'name':'Martin Brody','comment':'You&rsquo;re gonna need a bigger boat.','timestamp':'172281600'},
  {'name':'Jack Dawson','comment':'I&rsquo;m the king of the world!','timestamp':'882489600'},
  {'name':'The Terminator','comment':'Hasta la vista, baby.','timestamp':'678326400'},
  {'name':'The Joker','comment':'Why so serious..?','timestamp':'1215993600'}
];

$( document ).ready(function() {

  /* sort comments by timestamp with newest first */
  comments.sort(function(a, b){
    return b.timestamp - a.timestamp;
  });

  $.each(comments, function() {

    var name = this.name;
    var firstName = name.slice(0, name.indexOf(' '));

    var comment = this.comment;

    var date = new Date(this.timestamp * 1000);
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();
    var formatted = month + '/' + day + '/' + year;

    $('#comments').append('<div class="comment"><div class="msg">"' + comment +
                        '"</div><div class="author"><strong>- ' + firstName +
                        ',</strong> ' + formatted +
                        '</div></div>');
  });

  // hide all images except for the first initially
  $('#slideshow img:gt(0)').hide();

  // iterate through all images
  setInterval(function(){
    // use the fadeIn and fadeOut to do animation without end
    $('#slideshow :first-child').fadeOut()
                              .next('img').fadeIn()
                              .end().appendTo('#slideshow');

  },4000);
});
