<?php
class parqueo{

    function agregarparqueo($param){
        extract($param);
        $sql = "INSERT INTO parqueadero(
            codigo_parque, posicion_parque, codigo_usuario, ingreso_parque, salida_parque, total_parque)
            VALUES (?, ?, ?, ?, ?, ?);";
        $rs = $conexion->getPDO()->prepare($sql);
        $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try {
                    $rs->execute(array($codigo_parque,$posicion_parque, $codigo_usuario, $ingreso_parque, $salida_parque, $total_parque));
                      $state  = "agregado correctamente el parqueo con codigo " .$codigo_parque ;
                     
                    echo json_encode($state);
                 } catch (Exception $ex) {
                    //$state[0] = print_r($ex, 1);
                    $state = "Ocurrio un error al insertar el parqueo: " .$codigo_parque .$ex;
                    
                    echo json_encode($state);
                }

    }

    function editarparqueo($param){
        extract($param);
        $sql ="UPDATE parqueadero SET salida_parque='$salida_parque' where codigo_parque=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_parque))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function consultarparqueos($param){
        extract($param);
        $sql = "select * from parqueadero";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array())) {
            if ($filas = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($filas as $fila) {

                    $array[] = $fila;
                }
            }
        }
    
            echo json_encode(($array));        
 

    }

    function consultarparqueo($param){
        extract($param);
        $sql ="select * from parqueadero where codigo_parque=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_parque))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }



}