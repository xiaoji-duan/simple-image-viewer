$(document).ready(function () {
  function getContextPath() {
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = pathName.substr(0, index + 1);
    return result;
  }

  function render() {
    var $image = $("#image");

    $image.viewer({
      inline: true,
      viewed: function () {
        $image.viewer("zoomTo", 1);
      },
    });

    // Get the Viewer.js instance after initialized
    var viewer = $image.data("viewer");
  }

  $.get(getContextPath() + "/getImages", function (data) {
    var images = JSON.parse(data)["images"];
    for (i = 0; i < images.length; i++) {
      //   document.getElementById("imageList").innerHTML +=
      //     '<a href="images/' +
      //     images[i] +
      //     '"> <image src="images/' +
      //     images[i] +
      //     '"/></a>';
      document.getElementById("images").innerHTML +=
        '<li><image src="images/' +
        images[i] +
        '"  alt="' +
        images[i] +
        '"/></li>';
    }

    // View a list of images
    $("#images").viewer();
  });
});
