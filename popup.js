document.addEventListener("DOMContentLoaded", function () {
  var select = document.getElementById("mangaSelect");
  var imageContainer = document.getElementById("imageContainer");

  // Fetch the list of available manga
  fetch("http://api.consumet.org/manga")
    .then(function (response) {
      return response.json(); 
    })
    .then(function (data) {
      // Populate the select dropdown with manga titles
      data.forEach(function (manga) {
        var option = document.createElement("option");
        option.text = manga.title;
        option.value = manga.id;
        select.add(option);
      });
    })
    .catch(function (error) {
      console.error(error);
    });

  // Listen for select change event
  select.addEventListener("change", function () {
    var mangaId = select.value;
    imageContainer.innerHTML = "Loading...";

    // Fetch the selected manga's chapters
    fetch(`http://api.consumet.org/manga/${mangaId}/chapters`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var latestChapters = data.slice(-10);

        latestChapters.forEach(function (chapter, index) {
          var imageUrl = `http://api.consumet.org/manga/${mangaId}/chapter/${chapter.number}/image`;

          // Display the images of the selected chapters
          imageContainer.innerHTML += `<img src="${imageUrl}" alt="${manga.title} Chapter ${chapter.number}" />`;
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  });
});
