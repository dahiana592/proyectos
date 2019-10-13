var url='../../controlador/fachada.php';

document.getElementById("agregar").addEventListener('click', function(){
    agregarusuplan();
});

document.getElementById("editar").addEventListener('click', function(){
    editarusuplan();
});

document.getElementById("eliminar").addEventListener('click', function(){
    eliminarusuplan();
});

document.getElementById("consultar").addEventListener('click',function(){
    consultarusuplan();
});

function agregarusuplan(){
    const data= new FormData();
    data.append('oper','agregarusuplan');
    data.append('clase','usuplan');
    data.append('codigo_usuplan', document.getElementById("codigo_usuplan").value);
    data.append('codigo_usuario', document.getElementById("codigo_usuario").value);
    data.append('codigo_plan', document.getElementById("codigo_plan").value);
    data.append('fecha_usuplan', document.getElementById("fecha_usuplan").value);
   
       fetch(url, {
        method: 'POST', // or 'PUT'
        body: data, // data can be `string` or {object}!

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}

function editarusuplan(){
    const data = new FormData();
    data.append('oper', 'editarusuplan');
    data.append('clase', 'usuplan');
    data.append('codigo_usuplan', document.getElementById("codigo_usuplan").value);
    data.append('fecha_usuplan', document.getElementById("fecha_usuplan").value); 
    fetch(url, {
            method: 'POST', // or 'PUT'
            body: data,
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert(response));
           
}



function   consultarusuplan(){
    let codigo=document.getElementById("codigo_usuplan");
    const data = new FormData();
    
    if(codigo.value==''){
        data.append('oper','consultarusuplanes');
        data.append('clase','usuplan');
    }else{
        data.append('oper','consultarusuplan');
        data.append('clase','usuplan');
        data.append('codigo_usuplan', codigo.value);
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
                var html="<tr><th> CODIGO </th> <th> USUARIO </th> <th> PLAN </th> <th> FECHA </th></tr>";
                response.forEach(element => {
                    html+="<tr><th>"+ element.codigo_usuplan +" </th>" +"<th>"+ element.codigo_usuario+" </th>"+"<th>"+ element.codigo_plan+" </th>" +"<th>"+ element.fecha_usuplan +" </th></tr>"
            });
            document.getElementById("usuplan").innerHTML=(html);
         }
         });

}

function eliminarusuplan(){
    const data = new FormData();
    data.append('oper','eliminarusuplan');
    data.append('clase','usuplan');
    data.append('codigo_usuplan', document.getElementById("codigo_usuplan").value);
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: data,
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}