var btn_agregar=document.getElementById('agregar');
var btn_guardar=document.getElementById('guardar');
var mostrar_ltr=document.getElementById('ltr');
var info=[];
btn_agregar.addEventListener("click",ingresar_datos);
btn_guardar.addEventListener("click",guardar_datos);
var contador=0;
function ingresar_datos(){
    var nombre_cliente=document.querySelector('#nombre').value;
    var valor_menu=parseFloat(document.querySelector('#precio').value);
    var valor_unitario=parseFloat(document.querySelector('#cantidad').value)
    var valor_total=valor_menu*valor_unitario;
    //agrega elementos al arreglo
    info.push(
        {"id":contador,"nombre":nombre_cliente,"precio":valor_menu,"total_p":valor_unitario,"total":valor_total}
    );
   
   //convertir el arreglo a json
  // console.log(JSON.stringify(data));
  var id_fila='row'+contador;
  var mostrar='<tr id='+id_fila+'><td>'+nombre_cliente+'</td><td>'+valor_menu+'</td><td>'+valor_unitario+'</td><td>'+valor_total+'</td><td><a href="#" class="btn btn-danger" onclick="eliminar('+contador+')";>Eliminar</a><a href="#" class="btn btn-warning" onclick="cantidad('+contador+')";>Actualizar</a></td></tr>';
  //agregar fila a la tabla
  $("#ltr").append(mostrar);
  $("#nombre").val('');
  $("#precio").val('');
  $("#cantidad").val('');
  $("#nombre").focus();
  contador++;
  suma();
}
function eliminar(parametro){
    //remueve la fila de la tabla html
    $("#row"+parametro).remove();
   //remover el elmento del arreglo
   //data.splice(row,1);
   //buscar el id a eliminar
   var i=0;
   var posicion=-1;
   for (x of info){
       console.log(x.id);
       if (x.id==parametro){
           posicion=i;
       }
       i++;
   }
   info.splice(posicion,1);
  suma();
}
function cantidad(parametro){
    var valor=parseInt(prompt("Valor a Actualizar"));
    info[parametro].cantidad=valor;
    info[parametro].total=info[parametro].cantidad*info[parametro].precio;
    var filaid=document.getElementById("row"+parametro);
    celda=filaid.getElementsByTagName('td');
    celda[2].innerHTML=valor;
    celda[3].innerHTML= info[parametro].total;
    console.log(info);
    suma();
}
function suma(){
    let totalizado=0;
    for (x of info){
       totalizado=totalizado+x.total;
    }
    document.querySelector("#total").innerHTML="Total "+totalizado;
}   
function guardar_datos(){
    var json=JSON.stringify(info);
    $.ajax({
        type: "POST",
        url: "input.php",
        data: "json="+json,
        success:function(r){
           location.reload();
        }
        
    });
}