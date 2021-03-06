function GenerarTabla() {

    var xhttp : XMLHttpRequest = new XMLHttpRequest();
    var stringAuxiliar : string = "<tbody><thead><th>ID</th><th>Nombre</th><th>Country</th><th>Longitud</th><th>Latitud</th><th>Accion</th></thead></tbody>";
  
    xhttp.open("GET" , "./administrarCiudades.php?accion=listar");
    xhttp.send();

    xhttp.onreadystatechange = () => {

        if(xhttp.readyState==4 && xhttp.status==200) {

            var json = JSON.parse(xhttp.responseText);
            alert(xhttp.responseText);
            for(let item of json) {
                
                stringAuxiliar += `<tr><td>${item._id}</td><td>${item.name}</td><td>${item.country}</td><td>${(item.coord).lon}</td><td>${(item.coord).lon}</td><td><a href='./administrarCiudades.php?accion=eliminar&id=${item._id}'><input type='button' value='Eliminar'/></a></td></tr>`;
            }

            (<HTMLTableElement>document.getElementById("table")).innerHTML = stringAuxiliar;
        }
    }
}

function Agregar() {

    var ID : string = (<HTMLInputElement>document.getElementById("txtId")).value;
    var name : string = (<HTMLInputElement>document.getElementById("txtNombre")).value;
    var country : string = (<HTMLInputElement>document.getElementById("txtCountry")).value;
    var lon : string = (<HTMLInputElement>document.getElementById("txtLongitud")).value;
    var lat : string = (<HTMLInputElement>document.getElementById("txtLatitud")).value;
    var json = {"_id":ID,"name":name,"country":country,"coord":{"lon":lon,"lat":lat}};

    var xhttp : XMLHttpRequest = new XMLHttpRequest();
    
    xhttp.open("GET" , "./administrarCiudades.php?accion=agregar&json=" + JSON.stringify(json));
    xhttp.send();
  
    xhttp.onreadystatechange = () => {

        if(xhttp.readyState==4 && xhttp.status==200) {
            
            alert(xhttp.responseText);
        }
    }
}
