// jquery ui script for snapping to grid
$(function(){
    $( ".draggable" ).draggable({ grid: [10,10] });
    $( "#draggable4" ).draggable({ grid: [ 20, 20 ], snap: true });
});

// code to make the active div move to the front
// code from http://www.codingforums.com/javascript-programming/260289-bring-div-element-front-click.html
var moveToFront = function(){
  // create an array to hold the (buildings, streets, landmarks) element's id
  var ids=[],
  // grab all the divs (each icon) and put it into thedivs
  thedivs = document.getElementById("canvas").getElementsByTagName("div");

  for (var i = 0; i < thedivs.length; i++) {

    // add the id of each div to the ids array
    // alert(thedivs[i].id);
    ids.push(thedivs[i].id);

    thedivs[i].onclick = function() {

      for (var a = 0; a < ids.length; a++) {
        if (this.id == ids[a]) {
          // take current id that matches the selected id and move it to the end
          ids.push(ids.splice(a,1));
        }
        document.getElementById(ids[a]).style.zIndex=a;     
      }
    }
  }
};

// jQuery script for view/hide instructions
$(document).ready(function(){
  // $('.flip').click(function(){
  //   $('.icon-holder').toggle("slow");
  //   // $(this).next().animate({width: 'toggle'});
  // });

  // Zoom features using panzoom
  $('#cArea').panzoom({
    // minScale: 0,
    $zoomIn: $(".zoom-in"),
    $zoomOut: $(".zoom-out"),
    $zoomRange: $(".zoom-range")
  });

  // toggle panning on and off
  var panIsDisabled = true;

  $('.stop-pan').click(function(){
    // alert(panIsDisabled == true ? "Panning is turned off." : "Panning is turned on.");
    if (panIsDisabled == true){
      $('#cArea').panzoom("option", "disablePan", true);
      panIsDisabled = false;
    } else {
      $('#cArea').panzoom("option", "disablePan", false);
      panIsDisabled = true;
    }
  });

  // counter for newly created divs
  var divCounter = 0;

  // cloning divs onto canvas
  // **** streets ****
  // road1
  $('#icons').on("click",".street1", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:20px;height:20px;'><img src='/images/road1.svg' alt='street' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [2,2]});
    moveToFront();
  });

  // road2
  $('#icons').on("click",".street2", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:20px;height:20px;'><img src='/images/road2.svg' alt='street' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [2,2]});
    moveToFront();
  });

  // road3-1
  $('#icons').on("click",".street3-1", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:20px;height:20px;'><img src='/images/road_3way_1.svg' alt='street' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [2,2]});
    moveToFront();
  });

  // road3-2
  $('#icons').on("click",".street3-2", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:20px;height:20px;'><img src='/images/road_3way_2.svg' alt='street' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [2,2]});
    moveToFront();
  });

  // road3-3
  $('#icons').on("click",".street3-3", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:20px;height:20px;'><img src='/images/road_3way_3.svg' alt='street' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [2,2]});
    moveToFront();
  });

  // road3-4
  $('#icons').on("click",".street3-4", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:20px;height:20px;'><img src='/images/road_3way_4.svg' alt='street' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [2,2]});
    moveToFront();
  });

  // road4-1
  $('#icons').on("click",".street4-1", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:20px;height:20px;'><img src='/images/road_curve_1.svg' alt='street' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [2,2]});
    moveToFront();
  });

  // road4-2
  $('#icons').on("click",".street4-2", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:20px;height:20px;'><img src='/images/road_curve_2.svg' alt='street' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [2,2]});
    moveToFront();
  });

  // road4-3
  $('#icons').on("click",".street4-3", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:20px;height:20px;'><img src='/images/road_curve_3.svg' alt='street' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [2,2]});
    moveToFront();
  });

  // road4-4
  $('#icons').on("click",".street4-4", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:20px;height:20px;'><img src='/images/road_curve_4.svg' alt='street' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [2,2]});
    moveToFront();
  });

  // crossroad
  $('#icons').on("click",".street5", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house' id='street" + divCounter + "' style='width:20px;height:20px;'><img src='/images/crossroad1.svg' alt='street' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({ grid: [2,2]});
    moveToFront();
  });

  // **** buildings ****
  // apt
  $('#icons').on("click",".building1", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:80px;height:80px;'><img src='/images/building_apt.svg' alt='building' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // office
  $('#icons').on("click",".building2", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:80px;height:80px;'><img src='/images/building_office.svg' alt='house' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // factory
  $('#icons').on("click",".building3", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:80px;height:80px;'><img src='/images/factory_1.svg' alt='factory' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // firestation
  $('#icons').on("click",".building4", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:80px;height:80px;'><img src='/images/fire_station.svg' alt='firestation' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // hospital
  $('#icons').on("click",".building5", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:80px;height:80px;'><img src='/images/hospital.svg' alt='hospital' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // house1
  $('#icons').on("click",".building6", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:40px;height:40px;'><img src='/images/house_1.svg' alt='house' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // house2
  $('#icons').on("click",".building7", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:40px;height:40px;'><img src='/images/house_2.svg' alt='house' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // house3
  $('#icons').on("click",".building8", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:40px;height:40px;'><img src='/images/house_3.svg' alt='house' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // house4
  $('#icons').on("click",".building9", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:40px;height:40px;'><img src='/images/house_4.svg' alt='house' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // police station
  $('#icons').on("click",".building10", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house apt' id='building" + divCounter + "' style='width:80px;height:80px;'><img src='/images/police_station.svg' alt='police station' type='image/svg+xml'/></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // skyscraper1
  $('#icons').on("click",".building11", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house sky' id='skyscraper" + divCounter + "' style='width:100px;height:100px;'><img src='/images/skyscraper_1.svg' alt='building' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // skyscraper2
  $('#icons').on("click",".building12", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house sky' id='skyscraper" + divCounter + "' style='width:100px;height:100px;'><img src='/images/skyscraper_2.svg' alt='building' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // skyscraper3
  $('#icons').on("click",".building13", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house sky' id='skyscraper" + divCounter + "' style='width:100px;height:100px;'><img src='/images/skyscraper_3.svg' alt='building' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // skyscraper4
  $('#icons').on("click",".building14", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house sky' id='skyscraper" + divCounter + "' style='width:100px;height:100px;'><img src='/images/skyscraper_4.svg' alt='building' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });




  // **** landmarks ****
  // transamerica
  $('#icons').on("click",".landmark1", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house sky' id='landmark" + divCounter + "' style='width:100px;height:100px;'><img src='/images/trans_america.svg' alt='transamerica' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // ballpark
  $('#icons').on("click",".landmark2", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house ball' id='building" + divCounter + "' style='width:120px;height:120px;'><img src='/images/ballpark.svg' alt='ballpark' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });

  // union square
  $('#icons').on("click",".landmark3", function(){
    divCounter++;
    // alert(divCounter);
    $("<div class='house ball' id='building" + divCounter + "' style='width:80px;height:80px;'><img src='/images/unionsquare.svg' alt='union sq' type='image/svg+xml' /></div>").appendTo('.canvas-area').draggable({grid: [2,2]});
    moveToFront();
  });
});



// jquery ui script for shopping cart
$(function(){
  $("#catalog").accordion();
  $("#catalog li").draggable({
  // $("#catalog div").draggable({
    appendTo: "body",
    helper: "clone"
  });
  // area on the canvas where the icons can be placed on
  // $("#canvas ul").droppable({
  $("#canvas div").droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    accept: ":not(.ui-sortable-helper)",
    drop: function( event, ui ){
      $(this).find(".placeholder").remove();
      // add a DOM tag to the text and append it to the body
      // $("<li></li>").text(ui.draggable.text()).appendTo(this);
      // $("<div id='draggable' class='draggable ui-widget-content'></div>").text(ui.draggable.text()).appendTo(this);
    }
  }).sortable({
    items: "li:not(.placeholder)",
    sort: function(){
      // gets added unintentionally by droppable interacting with sortable
      // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
      $(this).removeClass("ui-state-default");
    }
  });
});



