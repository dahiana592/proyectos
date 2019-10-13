var url='../../controlador/fachada.php';

document.getElementById("agregar").addEventListener('click', function(){
    agregarencargados();
});

document.getElementById("editar").addEventListener('click', function(){
    editarencargados();
});

document.getElementById("eliminar").addEventListener('click', function(){
    eliminarencargados();
});

document.getElementById("consultar").addEventListener('click',function(){
    consultarencargados();
});

function agregarencargados(){
    const data= new FormData();
    data.append('oper','agregarencargados');
    data.append('clase','encargados');
    data.append('codigo_personal', document.getElementById("codigo_personal").value);
    data.append('nombre_personal', document.getElementById("nombre_personal").value);
    data.append('apellido_personal', document.getElementById("apellido_personal").value);
    data.append('tel_personal', document.getElementById("tel_personal").value);
    data.append('codigo_zona', document.getElementById("codigo_zona").value);
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: data, // data can be `string` or {object}!

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}

function editarencargados(){
    const data = new FormData();
    data.append('oper', 'editarencargados');
    data.append('clase', 'encargados');
    data.append('codigo_personal', document.getElementById("codigo_personal").value);
    data.append('tel_personal', document.getElementById("tel_personal").value); 
    fetch(url, {
            method: 'POST', // or 'PUT'
            body: data,
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert(response));
           
}



function   consultarencargados(){
    let codigo=document.getElementById("codigo_personal");
    const data = new FormData();
    
    if(codigo.value==''){
        data.append('oper','consultarencargados');
        data.append('clase','encargados');
    }else{
        data.append('oper','consultarencargado');
        data.append('clase','encargados');
        data.append('codigo_personal', codigo.value);
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
                var html="<tr><th> CODIGO </th> <th> NOMBRE </th> <th> APELLIDO </th> <th> TELEFONO </th><th> ZONA </th></tr>";
                response.forEach(element => {
                    html+="<tr><th>"+ element.codigo_personal +" </th>" +"<th>"+ element.nombre_personal+" </th>"+"<th>"+ element.apellido_personal+" </th>" +"<th>"+ element.tel_personal +" </th>" +"<th>"+ element.codigo_zona +" </th></tr>"
            });
            document.getElementById("encargados").innerHTML=(html);
         }
         });

}

function eliminarencargados(){
    const data = new FormData();
    data.append('oper','eliminarencargados');
    data.append('clase','encargados');
    data.append('codigo_personal', document.getElementById("codigo_personal").value);
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: data,
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}