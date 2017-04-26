$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>")
    $("ul#computer").prepend("<li>Who, me?</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
    $("button#goodbye").click(function(){
      $("ul#user").prepend("<li>Goodbye!</li>");
      $("ul#computer").prepend("<li>Tata, darling!</li>");
      $("ul#user").children("li").first().click(function() {
        $(this).remove();
      });

      $("ul#computer").children("li").first().click(function() {
        $(this).remove();
      });
  });
  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop copying me!!</li>");
    $("ul#computer").prepend("<li>Take care, love.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#computer").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
