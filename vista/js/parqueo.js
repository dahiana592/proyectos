var url='../../controlador/fachada.php';

document.getElementById("agregar").addEventListener('click', function(){
    agregarparqueo();
});

document.getElementById("editar").addEventListener('click', function(){
    editarparqueo();
});

document.getElementById("consultar").addEventListener('click',function(){
    consultarparqueo();
});

document.getElementById("total").addEventListener('click',function(){
    totalparqueo();
});

function agregarparqueo(){
    const data= new FormData();
    data.append('oper','agregarparqueo');
    data.append('clase','parqueo');
    data.append('codigo_parque', document.getElementById("codigo_parque").value);
    data.append('posicion_parque', document.getElementById("posicion_parque").value);
    data.append('codigo_usuario', document.getElementById("codigo_usuario").value);
    data.append('ingreso_parque', document.getElementById("ingreso_parque").value);
    data.append('salida_parque', document.getElementById("salida_parque").value);
    data.append('total_parque', document.getElementById("total_parque").value);
       fetch(url, {
        method: 'POST', // or 'PUT'
        body: data, // data can be `string` or {object}!

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}

function editarparqueo(){
    const data = new FormData();
    data.append('oper', 'editarparqueo');
    data.append('clase', 'parqueo');
    data.append('codigo_parque', document.getElementById("codigo_parque").value);
    data.append('salida_parque', document.getElementById("salida_parque").value); 
    fetch(url, {
            method: 'POST', // or 'PUT'
            body: data,
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert(response));
           
}



function   consultarparqueo(){
    let codigo=document.getElementById("codigo_parque");
    const data = new FormData();
    
    if(codigo.value==''){
        data.append('oper','consultarparqueos');
        data.append('clase','parqueo');
    }else{
        data.append('oper','consultarparqueo');
        data.append('clase','parqueo');
        data.append('codigo_parque', codigo.value);
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
                var html="<tr><th> CODIGO </th> <th> POSICION </th> <th> USUARIO </th> <th> INGRESO </th> <th> SALIDA </th> <th> TOTAL</th></tr>";
                response.forEach(element => {
                    html+="<tr><th>"+ element.codigo_parque +" </th>" +"<th>"+ element.posicion_parque+" </th>"+"<th>"+ element.codigo_usuario+" </th>" +"<th>"+ element.ingreso_parque +" </th>" +"<th>"+ element.salida_parque +" </th>" +"<th>"+ element.total_parque +" </th></tr>"
            });
            document.getElementById("parque").innerHTML=(html);
         }
         });

}


function totalparqueo(){
 let i=document.getElementById("ingreso_parque");
 let s=document.getElementById("salida_parque");
 let t=document.getElementById("total_parque");

 let v =s.value-i.value;
 t.value=v.value*parseInt(1500);
}