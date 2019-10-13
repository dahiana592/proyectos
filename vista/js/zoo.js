var url='../../controlador/fachada.php';

document.getElementById("agregar").addEventListener('click', function(){
    agregarzoo();
});

document.getElementById("eliminar").addEventListener('click', function(){
    eliminarzoo();
});

document.getElementById("consultar").addEventListener('click', function(){
    consultarzoo();
});


function agregarzoo(){
    const data =new FormData();
    data.append('oper', 'agregarzoo');
    data.append('clase','zoo');
    data.append('codigo_zoo', document.getElementById("codigo_zoo").value);
    data.append('nombre_zoo', document.getElementById("nombre_zoo").value);
    data.append('direccion_zoo', document.getElementById("direccion_zoo").value);
    data.append('tel_zoo', document.getElementById("tel_zoo").value);
    fetch(url, {
        method: 'POST', 
        body: data, 

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}


function eliminarzoo(){
    const data = new FormData();
    data.append('oper','eliminarzoo');
    data.append('clase','zoo');
    data.append('codigo_zoo', document.getElementById("codigo_zoo").value);
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: data,
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}


function consultarzoo(){
    let codigo=document.getElementById("codigo_zoo");
    const data =new FormData();

    if(codigo.value==''){
        data.append('oper','consultarzoo');
        data.append('clase','zoo');
    }else{
        data.append('oper','consultarzoos');
        data.append('clase','zoo');
        data.append('codigo_zoo', codigo_zoo.value);
    }

    fetch(url, {
        method: 'POST', 
        body: data,
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        if(response==null){
            alert("entra");
        }else{            
            var html="<tr><th> CODIGO </th> <th> NOMBRE </th> <th> DIRECCION </th> <th> TELEFONO </th></tr>";
            response.forEach(element => {
                html+="<tr><th>"+ element.codigo_zoo +" </th>" +"<th>"+ element.nombre_zoo+" </th>"+"<th>"+ element.direccion_zoo+" </th>" +"<th>"+ element.tel_zoo +" </th></tr>"
        });
        document.getElementById("zoo").innerHTML=(html);
     }
     });
}
