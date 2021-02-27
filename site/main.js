import Viewer from "viewerjs";

$(document).ready(function () {
  function getContextPath() {
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = pathName.substr(0, index + 1);
    return result;
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
  });

  // View an image
  const viewer = new Viewer(document.getElementById("image"), {
    inline: true,
    viewed() {
      viewer.zoomTo(1);
    },
  });

  // View a list of images
  const gallery = new Viewer(document.getElementById("images"));
});
