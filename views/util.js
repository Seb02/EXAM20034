function ShowTotal(e){
    e.preventDefault();
    let Prix = 0
    let number = document.querySelector("#nbseat");
    let assurance = document.querySelector("#assurance");
    if (assurance == on){
        Prix+=20;
    }
    Prix += (number*45);
    const Price = document.getElementById("PrixTot");
    Price.innerHTML = "Total de la réservation :" + Prix;
}
let boutonPrix = document.querySelector("bt_total");
boutonPrix.addEventListener("click", ShowTotal);
