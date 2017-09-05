var fetch = function () {
    var book = $('.input').val()
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+book ,
      success: function(data) {
        var bookTitle =  data.items[0].volumeInfo.title      
        var bookDes = data.items[0].volumeInfo.description
        var bookAuthor = data.items[0].volumeInfo.authors
        var bookImg = data.items[0].volumeInfo.imageLinks.thumbnail
        $('.book').empty()
        $('.book').append('<h2>' + bookTitle + '</h2>')
        $('.book').append('<p>' + bookDes + '</p>')
        $('.book').append('<h3>' + 'Written by: ' + bookAuthor + '</h3>')
        $('.book').append('<img src=' + bookImg + '>')
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };


$('.button').click(fetch)