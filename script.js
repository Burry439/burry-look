var source = $('#book-template').html();
var template = Handlebars.compile(source)


var fetch = function () {
    var book = $('.input').val()
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+book ,
      success: function(data) {
        $('.book').empty()
        var bookMenu =  
            {
            bookTitle : data.items[0].volumeInfo.title ,  
            bookDes : data.items[0].volumeInfo.description ,
            bookAuthor : data.items[0].volumeInfo.authors,
            bookImg : data.items[0].volumeInfo.imageLinks.thumbnail
         }
        
        var newHTML = template(bookMenu);
        $('.book').append(newHTML)
        
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $('.error').append(textStatus);
      }
    }); 
  };



$('.button').click(fetch)