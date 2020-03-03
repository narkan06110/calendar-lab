    var d = new Date();
    var m = d.getMonth();
    var y = d.getFullYear(); 
function calendar() {
    /* var */ 
    var daysInMonth = function (month, year) {
        return new Date(year, month+1, 0).getDate();
    };
    console.log(m,y);
    var cellCount = daysInMonth(m, y);
    var trNbr = 0;
    var clear = document.getElementById("calendrier");
    var nav = document.createElement("nav");
    nav.id = "navId"
    document.getElementById("calendrier").appendChild(nav);
    function lastY() {
        y-=1;
        clear.innerHTML = "";
        calendar();
        console.log(d);
    };
    function lastM() {
        m-=1;
        clear.innerHTML = "";
        calendar();
        console.log(m);
    };
    function nextM() {
        m+=1;
        clear.innerHTML = "";
        calendar();
        console.log(m);
    };
    function nextY() {
        y+=1;
        clear.innerHTML = "";
        calendar();
        console.log(y);
    };
    var titleDate = document.createElement("h1");
    titleDate.id = "titleId";
    titleH1 = (m+1),(y);
    titleDate.innerHTML = ""+(m+1)+", "+y;
    document.getElementById("navId").appendChild(titleDate);
    for (let i = 0; i < 4; i++) {
        var btn = document.createElement("input");
        btn.id = "id"+i;
        document.getElementById("navId").appendChild(btn);
        document.getElementsByTagName("INPUT")[i].setAttribute("type", "button");
    }
    document.getElementsByTagName("INPUT")[0].setAttribute("value", "<<");
    document.getElementsByTagName("INPUT")[1].setAttribute("value", "<");
    document.getElementsByTagName("INPUT")[2].setAttribute("value", ">");
    document.getElementsByTagName("INPUT")[3].setAttribute("value", ">>");
    document.getElementsByTagName("INPUT")[0].addEventListener("click", lastY);
    document.getElementsByTagName("INPUT")[1].addEventListener("click", lastM);
    document.getElementsByTagName("INPUT")[2].addEventListener("click", nextM);
    document.getElementsByTagName("INPUT")[3].addEventListener("click", nextY);
    var Cal = document.createElement("table");
    Cal.id = "Calen";
    document.getElementById("calendrier").appendChild(Cal);
    if (m == 1) {
        trNbr = 5;
    }
    else{
        trNbr = 6;
    };
    trNbr = 6;
    for (let i = 1; i <= trNbr; i++) {
        var Tab = document.createElement("tr");
        document.getElementById("Calen").appendChild(Tab);
        Tab.id = i;
        Tab.className = "trStyle";
    };
    for (let i = 1; i <= 7; i++) {
        var day;
        switch (new Date(y, m, i).getDay()) {
            case 0:
              day = "Sunday";
              break;
            case 1:
              day = "Monday";
              break;
            case 2:
              day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case  6:
              day = "Saturday";
          };
        var cellb = document.createElement("td");
        cellb.innerHTML = day;
        document.getElementById(1).appendChild(cellb);              
    };
    for (let j = 2; j <= trNbr; j++){
        for (let i = 0; i < 7; i++) {
            var dateTD = (i+1)+((j-2)*7);
            var cell = document.createElement("td");
            cell.innerHTML = dateTD;
            if(dateTD <= cellCount) {
                document.getElementById(j).appendChild(cell);              
            }
        };
    };
};
document.getElementsByTagName("body")[0].setAttribute("onload",calendar());
