var url='../../controlador/fachada.php';

document.getElementById("agregar").addEventListener('click', function(){
    agregaranimal();
});

document.getElementById("editar").addEventListener('click', function(){
    editaranimal();
});

document.getElementById("eliminar").addEventListener('click', function(){
    eliminaranimal();
});

document.getElementById("consultar").addEventListener('click',function(){
    consultaranimal();
});

function agregaranimal(){
    const data= new FormData();
    data.append('oper','agregaranimal');
    data.append('clase','animales');
    data.append('codigo_animal', document.getElementById("codigo_animal").value);
    data.append('nombre_animal', document.getElementById("nombre_animal").value);
    data.append('tamaño_animal', document.getElementById("tamaño_animal").value);
    data.append('categoria_animal', document.getElementById("categoria_animal").value);
    data.append('codigo_zona', document.getElementById("codigo_zona").value);
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: data, // data can be `string` or {object}!

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}

function editaranimal(){
    const data = new FormData();
    data.append('oper', 'editaranimal');
    data.append('clase', 'animales');
    data.append('codigo_animal', document.getElementById("codigo_animal").value);
    data.append('categoria_animal', document.getElementById("categoria_animal").value); 
    fetch(url, {
            method: 'POST', // or 'PUT'
            body: data,
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert(response));
           
}


function   consultaranimal(){
    let codigo=document.getElementById("codigo_animal");
    const data = new FormData();
    
    if(codigo.value==''){
        data.append('oper','consultaranimales');
        data.append('clase','animales');
    }else{
        data.append('oper','consultaranimal');
        data.append('clase','animales');
        data.append('codigo_animal', codigo.value);
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
                var html="<tr><th> CODIGO </th> <th> NOMBRE </th> <th> TAMAÑO </th> <th> CATEGORIA </th><th> ZONA </th></tr>";
                response.forEach(element => {
                    html+="<tr><th>"+ element.codigo_animal +" </th>" +"<th>"+ element.nombre_animal+" </th>"+"<th>"+ element.tamaño_animal+" </th>" +"<th>"+ element.categoria_animal +" </th>" +"<th>"+ element.codigo_zona +" </th></tr>"
            });
            document.getElementById("animal").innerHTML=(html);
         }
         });

}

function eliminaranimal(){
    const data = new FormData();
    data.append('oper','eliminaranimal');
    data.append('clase','animales');
    data.append('codigo_animal', document.getElementById("codigo_animal").value);
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: data,
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}
