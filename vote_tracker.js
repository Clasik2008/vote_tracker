$(function() {
  var galleryArray = [];
  var kittenImages;


  function tracker() {
      getDifferentImage = function(img1, img2) {
      var newNum;
      do {
        newNum = Math.floor(Math.random() * kittenImages.length);
      } while (newNum === img1 || newNum === img2);
      return newNum;
      }

     displayImage = function() {
      $("img#one").attr("src", kittenImages[img1].link);
      }
      var img1 = Math.floor(Math.random() * kittenImages.length);
      var img2 = getDifferentImage(img2, img2);
    };
   };
  //grab image album from hosted site using ajax

  var Photo = function() {
      this.votes = 0;
  }

  var database = function() {
    $.ajax({
      url: "https://api.imgur.com/3/album/2MJ1V.json",
      method: 'GET',
      headers: {
        "Authorization": "Client-ID 2da3cb73277c0a7"
    }

    }).done(function(data) {
      kittenImages = data.data.images;
      for(var i = 0; i < kittenImages.length; i++) {
      galleryArray.push(new Photo(i));
    }
      $(tracker());

      console.log("bueno!!");
    }).fail(function(data) {
        console.log("no bueno");
    });
  }

  database();
});


// var galleryArray = [];
// //loop to add the images to the array
// for (i = 0; i < 14; i++) {
//   var add ="cat" + i + ".jpg";
//   galleryArray.push([add]);
// }
// //console.log(galleryArray);
//tracker object should have the generateRandom



