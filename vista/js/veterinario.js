var url='../../controlador/fachada.php';

document.getElementById("agregar").addEventListener('click', function(){
    agregarvete();
});

document.getElementById("editar").addEventListener('click', function(){
    editarvete();
});

document.getElementById("cancelar").addEventListener('click', function(){
    eliminarvete();
});

document.getElementById("consultar").addEventListener('click',function(){
    consultarvete();
});

function agregarvete(){
    const data= new FormData();
    data.append('oper','agregarvete');
    data.append('clase','veterinario');
    data.append('codigo_veterinario', document.getElementById("codigo_veterinario").value);
    data.append('fecha_veterinario', document.getElementById("fecha_veterinario").value);
    data.append('encargado_veterinario', document.getElementById("encargado_veterinario").value);
    data.append('codigo_animal', document.getElementById("codigo_animal").value);
       fetch(url, {
        method: 'POST', // or 'PUT'
        body: data, // data can be `string` or {object}!

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}

function editarvete(){
    const data = new FormData();
    data.append('oper', 'editarvete');
    data.append('clase', 'veterinario');
    data.append('codigo_veterinario', document.getElementById("codigo_veterinario").value);
    data.append('fecha_veterinario', document.getElementById("fecha_veterinario").value); 
    fetch(url, {
            method: 'POST', // or 'PUT'
            body: data,
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert(response));
           
}



function   consultarvete(){
    let codigo=document.getElementById("codigo_veterinario");
    const data = new FormData();
    
    if(codigo.value==''){
        data.append('oper','consultarvetes');
        data.append('clase','veterinario');
    }else{
        data.append('oper','consultarvete');
        data.append('clase','veterinario');
        data.append('codigo_veterinario', codigo.value);
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
                var html="<tr><th> CODIGO </th> <th> FECHA </th> <th> ENCARGADO </th> <th> ANIMAL</th></tr>";
                response.forEach(element => {
                    html+="<tr><th>"+ element.codigo_veterinario +" </th>" +"<th>"+ element.fecha_veterinario+" </th>"+"<th>"+ element.encargado_veterinario+" </th>" +"<th>"+ element.codigo_animal +" </th></tr>"
            });
            document.getElementById("veterinario").innerHTML=(html);
         }
         });

}

function eliminarvete(){
    const data = new FormData();
    data.append('oper','eliminarvete');
    data.append('clase','veterinario');
    data.append('codigo_veterinario', document.getElementById("codigo_veterinario").value);
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: data,
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}