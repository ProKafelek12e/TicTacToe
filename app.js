// #ff0f80
var licznik = 0

var plansza = [[],[],[]]







function znak(id){    
    licznik++
    var symbol
    var kolor

    var intId = parseInt(id)-1
    
    if(licznik%2==0){
        symbol="Ｏ"
        kolor = "#8338EC"
    }
    else{
        symbol = "✖"
        kolor = "#DE9E36"
    }

    if(intId <3) plansza[0][intId] = symbol
    else if(intId >2 && intId<6) plansza[1][intId%3] = symbol
    else if(intId >5) plansza[2][intId%3] = symbol
    generujPlansze()



    document.getElementById(id).innerHTML = symbol
    document.getElementById(id).style.color = kolor
    //zajęcie pola
    document.getElementById(id).removeAttribute("onclick")
    document.getElementById(id).classList.add("zaj")
    czyWygrana()
}

function crtBoard(){
    var n = 1
    for(var j =0;j<3;j++){
        const tr = document.createElement("tr")
        for(var i=0;i<3;i++){
            const td = document.createElement("td")
            td.setAttribute("id",n)
            td.setAttribute("onclick",`znak(${n})`)
            tr.appendChild(td)
            n++
        }
        document.getElementById("table").appendChild(tr)
        console.log("tr")
    }
}
crtBoard()

function czyWygrana(){
    for(let i=0;i<=2;i++){
        if(plansza[i][0]==plansza[i][1]&&plansza[i][0]==plansza[i][2] && plansza[i][0]!=undefined) blokujPlansze()
    }
    for(let i=0;i<=2;i++){
        if(plansza[0][i]==plansza[1][i]&&plansza[0][i]==plansza[2][i] && plansza[0][i]!=undefined) blokujPlansze()    
    }
    if(plansza[0][0]==plansza[1][1] && plansza[0][0]== plansza[2][2]&&plansza[0][0]!=undefined) blokujPlansze()
    if(plansza[0][2]==plansza[1][1] && plansza[0][2]== plansza[2][0]&&plansza[0][2]!=undefined) blokujPlansze()
}
function blokujPlansze(){
    console.log("win")
    const h1 = document.createElement("h1")
    h1.innerHTML = "Wygrał gracz"
    document.getElementById("body").prepend(h1)
    for(let i=1;i<=9;i++){
        document.getElementById(i).removeAttribute("onclick")
    }

}
function generujPlansze(){
    var licznik2 =1
    for(let i=0;i<=2;i++){
        for(let j=0;j<=2;j++){
            console.log(plansza[i][j])
            if(plansza[i][j]!=undefined){
            document.getElementById(licznik2.toString()).innerHTML = plansza[i][j]
            }
            licznik2++
        }
    }
}