var url='../../controlador/fachada.php';

document.getElementById("agregar").addEventListener('click', function(){
    agregarusu();
});

document.getElementById("editar").addEventListener('click', function(){
    editarusu();
});

document.getElementById("eliminar").addEventListener('click', function(){
    eliminarusu();
});

document.getElementById("consultar").addEventListener('click',function(){
    consultarusu();
});

function agregarusu(){
    const data= new FormData();
    data.append('oper','agregarusu');
    data.append('clase','usuarios');
    data.append('codigo_usuario', document.getElementById("codigo_usuario").value);
    data.append('nombre_usuario', document.getElementById("nombre_usuario").value);
    data.append('apellido_usuario', document.getElementById("apellido_usuario").value);
    data.append('cedula_usuario', document.getElementById("cedula_usuario").value);
    data.append('edad_usuario', document.getElementById("edad_usuario").value);
    data.append('tel_usuario', document.getElementById("tel_usuario").value);
       fetch(url, {
        method: 'POST', // or 'PUT'
        body: data, // data can be `string` or {object}!

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}

function editarusu(){
    const data = new FormData();
    data.append('oper', 'editarusu');
    data.append('clase', 'usuarios');
    data.append('codigo_usuario', document.getElementById("codigo_usuario").value);
    data.append('cedula_usuario', document.getElementById("cedula_usuario").value); 
    fetch(url, {
            method: 'POST', // or 'PUT'
            body: data,
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert(response));
           
}



function   consultarusu(){
    let codigo=document.getElementById("codigo_usuario");
    const data = new FormData();
    
    if(codigo.value==''){
        data.append('oper','consultarusus');
        data.append('clase','usuarios');
    }else{
        data.append('oper','consultarusu');
        data.append('clase','usuarios');
        data.append('codigo_usuario', codigo.value);
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
                var html="<tr><th> CODIGO </th> <th> NOMBRE </th> <th> APELLIDO </th> <th> CEDULA</th><th> EDAD </th><th> TELEFONO </th></tr>";
                response.forEach(element => {
                    html+="<tr><th>"+ element.codigo_usuario +" </th>" +"<th>"+ element.nombre_usuario+" </th>"+"<th>"+ element.apellido_usuario+" </th>" +"<th>"+ element.cedula_usuario +" </th>" +"<th>"+ element.edad_usuario +" </th>" +"<th>"+ element.tel_usuario +" </th></tr>"
            });
            document.getElementById("usuario").innerHTML=(html);
         }
         });

}

function eliminarusu(){
    const data = new FormData();
    data.append('oper','eliminarusu');
    data.append('clase','usuarios');
    data.append('codigo_usuario', document.getElementById("codigo_usuario").value);
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: data,
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}