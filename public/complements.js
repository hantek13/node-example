document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    fetch("/complement")//fetch from complement 
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".complement").innerText = data.complement;// put that on the page
      })
      .catch(function(err) {
        console.error(err);
      });
  });