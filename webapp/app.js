zahl()
products();
function products(){
    fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => {
          let a = document.getElementById("iid");
          a = data[0].id;
          let b = document.getElementById("nname");
          b = data[0].name;
          let c = document.getElementById("iidb");
          c = data[1].id;
          let d = document.getElementById("nnameb");
          d= data[1].name;
            }
        );
}


function zahl(){
    fetch("http://localhost:3000/quadrat?zahl=4")
        .then((response) => response.json())
        .then((data) => {
                console.log(data)
                let x = document.getElementById("sstate");
                x = data.state;
                let y = document.getElementById("rresult");
                y = data.result;
                let z = document.getElementById("mmessage");
                z = data.message;
            }
        );

}

