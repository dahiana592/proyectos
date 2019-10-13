var url='../../controlador/fachada.php';

document.getElementById("agregar").addEventListener('click', function(){
    agregarplan();
});

document.getElementById("total").addEventListener('click', function(){
    totalplan();
});

document.getElementById("eliminar").addEventListener('click', function(){
    eliminarplan();
});


document.getElementById("consultar").addEventListener('click', function(){
    consultarplan();
});


function agregarplan(){
    const data = new FormData();

    data.append('oper', 'agregarplan');
    data.append('clase', 'planes');
    data.append('codigo_plan', document.getElementById("codigo_plan").value);
    data.append('niños_plan', document.getElementById("niños_plan").value);
    data.append('personas_plan', document.getElementById("personas_plan").value);
    data.append('total_plan', document.getElementById("total_plan").value);
    data.append('codigop_plan', document.getElementById("codigop_plan").value);
    fetch(url, {
        method: 'POST',
        body: data,

    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}


function totalplan(){
let codigo=document.getElementById("codigop_plan");
let n=document.getElementById("niños_plan");
let p=document.getElementById("personas_plan");
let t=document.getElementById("total_plan");
const data= new FormData();

if(codigo.value == '111'){
    if(n.value>='5' && p.value>='5'){
        t.value='36000'
    }else{
    if(n.value>='5'){
        t.value='15000';
    }else{
        t.value='30000';
    }
    if(p.value>='5'){
        t.value='24000'
    }else{
        t.value='30000'
    }        
    }
}else if(codigo.value== '222'){
    if(n.value>='5' && p.value>='5'){
        t.value='60000'
    }else{
    if(n.value>='5'){
        t.value='25000';
    }else{
        t.value='50000';
    }
    if(p.value>='5'){
        t.value='40000'
    }else{
        t.value='50000'
    }        
    }
}else if(codigo.value=='333'){
    if(n.value>='5' && p.value>='5'){
        t.value='30000'
    }else{
    if(n.value>='5'){
        t.value='37500';
    }else{
        t.value='75000';
    }
    if(p.value>='5'){
        t.value='40000'
    }else{
        t.value='50000'
    }        
    }
}else{
    if(n.value>='5' && p.value>='5'){
        t.value='32000'
    }else{
    if(n.value>='5'){
        t.value='40000';
    }else{
        t.value='80000';
    }
    if(p.value>='5'){
        t.value='40000'
    }else{
        t.value='64000'
    }        
    }
}

}


function eliminarplan(){
    const data = new FormData();
    data.append('oper','eliminarplan');
    data.append('clase','planes');
    data.append('codigo_plan', document.getElementById("codigo_plan").value);
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: data,
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert(response));
}

function   consultarplan(){
    let codigo=document.getElementById("codigo_plan");
    const data = new FormData();
    
    if(codigo.value==''){
        data.append('oper','consultarplanes');
        data.append('clase','planes');
    }else{
        data.append('oper','consultarplan');
        data.append('clase','planes');
        data.append('codigo_plan', codigo.value);
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
                var html="<tr><th> CODIGO </th> <th> NIÑOS </th> <th> ADULTOS</th><th> TOTAL </th></tr>";
                response.forEach(element => {
                    html+="<tr><th>"+ element.codigo_plan +" </th>" +"<th>"+ element.niños_plan+" </th>"+"<th>"+ element.personas_plan+" </th>" +"<th>"+ element.total_plan+" </th></tr>"
            });
            document.getElementById("plan").innerHTML=(html);
         }
         });

}