document.addEventListener("DOMContentLoaded", function () {
    // Set the countdown duration in seconds
    var countdownDuration = 59;
  
    // Get the elements of the timer
    var timerElement = document.querySelector(".timer-2 .text-wrapper-14");
    var secondsTextElement = document.querySelector(".timer-2 .text-wrapper-15");
  
    // Update the timer function
    function updateTimer() {
      timerElement.textContent = countdownDuration;
      secondsTextElement.textContent = countdownDuration === 1 ? "Saniye" : "Saniye";
  
      if (countdownDuration > 0) {
        countdownDuration--;
        setTimeout(updateTimer, 1000); // Update every second
      } else {
        // Redirect or perform any other action when the timer reaches 0
        // For example, you can redirect to a new page:
        window.location.href = "index.html";
      }
    }
  
    // Start the initial timer
    updateTimer();
  });
  

  // Copy to clipboard

  document.addEventListener("DOMContentLoaded", function () {
    // Get the copy button element
    var copyButton = document.querySelector(".copy");
  
    // Add click event listener to the copy button
    copyButton.addEventListener("click", function () {
      // Get the text to be copied (reference number in this case)
      var referenceNumber = document.querySelector(".iphone-selection .text-wrapper-9").textContent;
  
      // Use the Clipboard API to write text to the clipboard
      navigator.clipboard.writeText(referenceNumber)
        .then(function () {
          // Optionally, provide feedback to the user
          alert("Referans numarası kopyalandı: " + referenceNumber);
        })
        .catch(function (err) {
          console.error("Kopyalama başarısız oldu: ", err);
        });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    // Tıklanabilir öğeyi seçin
    var icon = document.getElementById("icon");

    // Öğeye tıklanma olayını dinleyin
    icon.addEventListener("click", function () {
        // Yönlendirilecek sayfanın URL'sini belirtin
        var redirectTo = "index.html"; // İstediğiniz URL'yi buraya ekleyin

        // Yeni sayfaya yönlendirme
        window.location.href = redirectTo;
    });
});