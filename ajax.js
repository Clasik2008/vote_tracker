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
