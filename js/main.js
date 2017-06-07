(function () {
  var buttonElem = $("#sendMessage");
  var textareaElem = $("#messageText");
  var containerElem = $("#commentsHolder");
  var generateComment = function(message) {
    return '<div class="post-block">'+
        '<a href="#">'+
          '<h2>Some User</h2>'+
        '</a>'+
        '<span class="gr-color date">'+ new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) +'</span>'+
        '<div class="comment-content">' + message + '</div>'+
      '</div>';
  };
  var onFormSubmit = function(event) {
    event.preventDefault();

    if (textareaElem.val() === "") return;

    containerElem.append(generateComment(textareaElem.val()));

    textareaElem.val("");
  };
  
  buttonElem.on("click", function(event) {
    onFormSubmit(event);
  });

  textareaElem.keydown(function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.keyCode == 13 || event.keyCode == 10)) {
     onFormSubmit(event); 
    }
  });
}());