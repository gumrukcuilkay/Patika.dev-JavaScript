function newElement() {
    let taskDom = document.querySelector("#task").value;
    let listDom = document.querySelector("#list");

    if (taskDom.length > 0) {
        let liDom = document.createElement("li");
        liDom.innerText = taskDom;

        // Çöp kutusu simgesini oluştur
        let iDom = document.createElement("i");
        iDom.className = 'fa fa-trash';
        iDom.style.cursor = "pointer";

        // Simgeye tıklayınca liste öğesini sil
        iDom.onclick = function () {
            this.parentElement.parentElement.remove();
        }

        let spanDom = document.createElement("span");
        spanDom.appendChild(iDom);
        $('#Toast').toast('show');
        document.querySelector("#task").value = ''; // Inputu temizle

        liDom.appendChild(spanDom); // Çöp kutusu simgesini liste öğesine ekle
        listDom.append(liDom);




        // Enter tuşuna basıldığında newElement fonksiyonunu çağır
        document.querySelector("#task").addEventListener("keydown", function (event) {
            if (event.key === 'Enter') {
                newElement();
            }
        });

    } else {
        // Toast mesajını göstermek için
        $('#myToast').toast('show');
    }
}