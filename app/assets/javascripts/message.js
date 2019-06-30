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
                // 以下、元のhaml        
                // .message
                //   .message__uper-info
                //     .message__uper-info__talker
                //       = message.user.name
                //     .message__uper-info__date
                //       = message.created_at.strftime("%Y/%m/%d %H:%M")
                //   %p.message__text
                //     - if message.content.present?
                //       %p.lower-message__content
                //         = message.content
                //     = image_tag message.image.url, class: 'lower-message__image' if message.image.present?
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
    .done(function(data){
      var html = buildHTML(data);
      $('.message').append(html)
      $('.form__text').val('')
      var ojheight = $('.messages').height();
      $('.messages').animate({scrollTop: ojheight});
    })
    .fail(function(){
      alert('error');
    })
    .always(function(data){
      $('.form__submit').prop('disabled', false);
    })
  })
});
