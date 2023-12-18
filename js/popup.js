function showLoader() {
    var loader = document.getElementById("loader");
    loader.style.display = "block";

    // Burada yapmak istediğiniz diğer işlemleri ekleyebilirsiniz

    // Simüle edilen bir bekleme süresi ekleyerek loader'ı gizleme
    setTimeout(function () {
        loader.style.display = "none"; // Loader'ı gizle
    }, 2000); // Örneğin, 2 saniye sonra loader'ı gizle
}

function continueProcess() {
// Devam Et butonuna tıklanınca yapılacak işlemler
alert('Devam Et butonuna tıklandı');
closePopup();
}

function closePopup() {
document.getElementById('popup').style.display = 'none';
}