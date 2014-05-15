// jquery ui script for snapping to grid
$(function(){
    $( ".draggable" ).draggable({ grid: [10,10] });
    $( "#draggable4" ).draggable({ grid: [ 20, 20 ], snap: true });
});