var url='../../controlador/fachada.php';

document.getElementById("agregar").addEventListener('click', function(){
    agregarzonas();
});

document.getElementById("editar").addEventListener('click', function(){
    editarzonas();
});

document.getElementById("consultar").addEventListener('click',function(){
    consultarzonas();
});

function agregarzonas(){
    const data= new FormData();
    data.append('oper','agregarzonas');
    data.append('clase','zonas');
    data.append('codigo_zona', document.getElementById("codigo_zona").value);
    data.append('nombre_zona', document.getElementById("nombre_zona").value);
    data.append('ubicacion_zona', document.getElementById("ubicacion_zona").value);
    data.append('codigo_zoo', document.getElementById("codigo_zoo").value);
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: data, // data can be `string` or {object}!

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}

function editarzonas(){
    const data = new FormData();
    data.append('oper', 'editarzonas');
    data.append('clase', 'zonas');
    data.append('codigo_zona', document.getElementById("codigo_zona").value);
    data.append('nombre_zona', document.getElementById("nombre_zona").value); 
    fetch(url, {
            method: 'POST', // or 'PUT'
            body: data,
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert(response));
           
}



function   consultarzonas(){
    let codigo=document.getElementById("codigo_zona");
    const data = new FormData();
    
    if(codigo.value==''){
        data.append('oper','consultarzonas');
        data.append('clase','zonas');
    }else{
        data.append('oper','consultarzona');
        data.append('clase','zonas');
        data.append('codigo_zona', codigo.value);
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
                var html="<tr><th> CODIGO </th> <th> NOMBRE </th> <th> UBICACION </th> <th> ZOOLOGICO </th></tr>";
                response.forEach(element => {
                    html+="<tr><th>"+ element.codigo_zona +" </th>" +"<th>"+ element.nombre_zona+" </th>"+"<th>"+ element.ubicacion_zona+" </th>" +"<th>"+ element.codigo_zoo +" </th></tr>"
            });
            document.getElementById("zonas").innerHTML=(html);
         }
         });

}