$(function(){
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image } class: 'lower-message__image'>` : "";
    var html = `<div class= "message">
                  <div class= "message__uper-info">
                    <div class= "message__uper-info__talker">
                      ${message.user_name}
                    </div>
                    <div class= "message__uper-info__date">
                      ${message.date}
                    </div>
                  </div>
                  <p class= "message__text>
                      <p class= "lower-message__content">
                        ${content}
                      </p>
                      ${img}
                  </p>
                </div>` 
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this)
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })   
    .done(function(message){
      var html = buildHTML(message);
      $('.message').append(html)
      $('.form__text').val('')
      function scrollBottom(){
        var target = $('.message').last();
        var position = target.offset().top + $('.messages').scrollTop();
        $('.messages').animate({
          scrollTop: position
        })
      }
    })
    .fail(function(){
      alert('error');
    })
    .always(function(message){
      $('.form__submit').prop('disabled', false);
    })
  })
});
