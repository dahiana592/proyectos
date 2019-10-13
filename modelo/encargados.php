<?php

class encargados{

    function agregarencargados($param){
        extract($param);
        $sql = "INSERT INTO  personal(
            codigo_personal, nombre_personal, apellido_personal, tel_personal, codigo_zona)
            VALUES (?, ?, ?, ?, ?);";
        $rs = $conexion->getPDO()->prepare($sql);
        $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try {
                    $rs->execute(array($codigo_personal,$nombre_personal, $apellido_personal, $tel_personal, $codigo_zona));
                      $state  = "El encargado fue agregado correctamente con nombre " .$nombre_personal ;
                     
                    echo json_encode($state);
                 } catch (Exception $ex) {
                    //$state[0] = print_r($ex, 1);
                    $state = "Ocurrio un error al insertar el encargado: " .$nombre_personal;
                    
                    echo json_encode($state);
                }

    }



    function editarencargados($param){
        extract($param);
        $sql ="UPDATE personal SET tel_personal='$tel_personal' where codigo_personal=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_personal))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function consultarencargados($param){
        extract($param);
        $sql = "select * from personal";
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

    function consultarencargado($param){
        extract($param);
        $sql ="select * from personal where codigo_personal=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_personal))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function eliminarencargados($param){
        extract($param);
        $sql ="DELETE FROM personal WHERE codigo_personal=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_personal))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    }
}