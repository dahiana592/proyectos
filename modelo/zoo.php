<?php
class zoo{
    function agregarzoo($param){
        extract($param);
        $sql = "INSERT INTO zoologico(
            codigo_zoo, nombre_zoo, direccion_zoo, tel_zoo)
            VALUES (?, ?, ?, ?);";
        $rs = $conexion->getPDO()->prepare($sql);
        $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try {
                    $rs->execute(array($codigo_zoo,$nombre_zoo, $direccion_zoo, $tel_zoo));
                      $state  = "Agregado correctamente el zoologico " .$nombre_zoo ;
                     
                    echo json_encode($state);
                 } catch (Exception $ex) {
                    //$state[0] = print_r($ex, 1);
                    $state = "Ocurrio un error al agregar el zoologico " .$nombre_zoo ;
                    
                    echo json_encode($state);
                }
    }


    function eliminarzoo($param){
        extract($param);
        $sql ="DELETE FROM zoologico WHERE codigo_zoo=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_zoo))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    }


    function consultarzoos($param){
        extract($param);
        $sql = "select * from zoologico";
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

    function consultarzoo($param){
        extract($param);
        $sql ="select * from zoologico where codigo_zoo=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_zoo))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


}