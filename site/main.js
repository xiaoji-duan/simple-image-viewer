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
      document.getElementById("imageList").innerHTML +=
        '<a href="images/' +
        images[i] +
        '"> <image src="images/' +
        images[i] +
        '"/></a>';
    }
  });
});
