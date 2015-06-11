 $(document).ready(function() {
//grab image album from hosted site using ajax
    $.ajax({
      url: "https://api.imgur.com/3/album/2MJ1V.json",
      headers: {
        "Authorization": "Client-ID 2da3cb73277c0a7"
      }
    })

      .done(function(data) {
        var imageGallery = [];
        var kittenImages = data.data.images;
        var imageCount = data.data.images_count;

        for(var i = 0; i < kittenImages.length; i++) {
          imageGallery.push(new Photo());
        }
      tracker.getKittens(kittenImages);
      })

   function Photo() {
      this.votes = 0;
    }

    var tracker = {
      vote1: "",
      vote2: "",
    }

    tracker.generateRandom = function(images) {
      return Math.floor(Math.random() * images);
    }

    tracker.getKittens = function(images) {
      tracker.vote1 = tracker.generateRandom();
      tracker.vote2 = tracker.generateRandom();

      while (tracker.vote1 === tracker.vote2) {
        tracker.vote2 = tracker.generateRandom(images);
      }

      $("img#vote1").attr("src", function(){
        return images[tracker.vote1];
      })

      $('img#vote2').attr('src', function() {
      return images[tracker.vote2];
      })
    }
});




