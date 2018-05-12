// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(

  function() {
    $('#sizePicker').submit(
      function(event){
        event.preventDefault();
        makeGrid();
      }
    );
  }

);

function makeGrid() {
  // Your code goes here!

  // Get height and width entered by user
  height = $('#inputHeight').val();
  width  = $('#inputWeight').val();

  // Create the grid
  $("#pixelCanvas").find("tr").remove();

  // Create a sample row
  var a_row = '';
  for(var col = 1; col <= width; col++){
    a_row += ('<td></td>');
  }

  for(var row = 1; row <= height; row++){
    $('#pixelCanvas').append('<tr>' + a_row + '</tr>');
  }

  $('td').click(
    function(){
      color = $('#colorPicker').val();

      if($(this).attr('style')){
        $(this).removeAttr('style')
      } else {
        $(this).css("background-color", color);
      }
  });

};
