<?php
class zonas{

    function agregarzonas($param){
        extract($param);
        $sql = "INSERT INTO zonas(
            codigo_zona, nombre_zona, ubicacion_zona, codigo_zoo)
            VALUES (?, ?, ?, ?);";
        $rs = $conexion->getPDO()->prepare($sql);
        $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try {
                    $rs->execute(array($codigo_zona,$nombre_zona, $ubicacion_zona, $codigo_zoo));
                      $state  = "La zona fue agregada correctamente con nombre " .$nombre_zona ;
                     
                    echo json_encode($state);
                 } catch (Exception $ex) {
                    //$state[0] = print_r($ex, 1);
                    $state = "Ocurrio un error al insertar la zona: " .$codigo_zona;
                    
                    echo json_encode($state);
                }

    }



    function editarzonas($param){
        extract($param);
        $sql ="UPDATE zonas SET nombre_zona='$nombre_zona' where codigo_zona=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_zona))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function consultarzonas($param){
        extract($param);
        $sql = "select * from zonas";
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

    function consultarzona($param){
        extract($param);
        $sql ="select * from zonas where codigo_zona=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_zona))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }

}