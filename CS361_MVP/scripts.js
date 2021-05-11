

function removeItem() {
    document.getElementById("cardRemove").addEventListener("click", function () {
        event.preventDefault();
        document.getElementsByClassName("card").parentElement.remove();
    });
}

function addCard() {
    var cardList = document.getElementsByClassName("card");

    let container = document.getElementById("container");

    newCard = document.createElement("div");
    newCard.className = 'card';
    newCard.textContent = "new person";
/*
    for(var i = 0; i < cardList.length; i++)
    {
        if (newCard.textContent === cardList.getElementsByClassName("person-name").textContent) {
            return
        }
    };
*/
    container.append(newCard);

}


