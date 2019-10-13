var url='../../controlador/fachada.php';

document.getElementById("agregar").addEventListener('click', function(){
    agregarzp();
});

document.getElementById("consultar").addEventListener('click',function(){
    consultarzp();
});

function agregarzp(){    
    const data= new FormData();
    data.append('oper','agregarzp');
    data.append('clase','zonaplan');
    data.append('codigo_zonaplan', document.getElementById("codigo_zonaplan").value);
    data.append('codigo_zona', document.getElementById("codigo_zona").value);
    data.append('codigo_plan', document.getElementById("codigo_plan").value);
        fetch(url, {
        method: 'POST', 
        body: data, 

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}

function   consultarzp(){
    let codigo=document.getElementById("codigo_zonaplan");
    const data = new FormData();
    
    if(codigo.value==''){
        data.append('oper','consultarzps');
        data.append('clase','zonaplan');
    }else{
        data.append('oper','consultarzp');
        data.append('clase','zonaplan');
        data.append('codigo_zonaplan', codigo.value);
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
                var html="<tr><th> CODIGO </th> <th> ZONA </th> <th> PLAN </th></tr>";
                response.forEach(element => {
                    html+="<tr><th>"+ element.codigo_zonaplan +" </th>" +"<th>"+ element.codigo_zona+" </th>"+"<th>"+ element.codigo_plan+" </th></tr>"
            });
            document.getElementById("zp").innerHTML=(html);
         }
         });

}


