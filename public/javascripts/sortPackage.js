var options = {
    valueNames: [ 'price','duration','popularity','hotelRating','tripType','price','location' ]
};

var packageList = new List('package-list', options);


function updateList(){
      var values_hotelRating = $("input[name=hotelRating]:checked").val();
      var values_tripType = $("input[name=tripType]:checked").val();
      console.log( values_hotelRating);
      console.log( values_tripType);
      packageList.filter(function (item) {
          var hotelRatingFilter = false;
          var tripTypeFilter = false;
          if(values_hotelRating == null)
          { 
            hotelRatingFilter = true;
          } else {
            hotelRatingFilter = item.values().hotelRating.indexOf(values_hotelRating) >= 0;
          }

          if(values_tripType == null)
          { 
            tripTypeFilter = true;
          } else {
            tripTypeFilter = item.values().tripType.indexOf(values_tripType) >= 0;
          }
          return tripTypeFilter && hotelRatingFilter
      });
      packageList.update();
      //console.log('Filtered: ' + values_gender);
  }



$(function(){
    //updateList();
      $('input[name=hotelRating]').change(updateList);
      $('input[name=tripType]').change(updateList);
  });



  //location based trip discovery

  var locationBut = document.querySelector('#location')
  var locate = function(){
    console.log('location button clicked')
  }
  locationBut.addEventListener('click',locate)