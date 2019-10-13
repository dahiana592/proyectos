<?php
class animales{
    function agregaranimal($param){
        extract($param);
        $sql = "INSERT INTO animales(
            codigo_animal, nombre_animal, tamaño_animal, categoria_animal, codigo_zona)
            VALUES (?, ?, ?, ?, ?);";
        $rs = $conexion->getPDO()->prepare($sql);
        $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try {
                    $rs->execute(array($codigo_animal,$nombre_animal, $tamaño_animal, $categoria_animal,$codigo_zona));
                      $state  = "agregada correctamente el animal con nombre " .$nombre_animal ;
                     
                    echo json_encode($state);
                 } catch (Exception $ex) {
                    //$state[0] = print_r($ex, 1);
                    $state = "Ocurrio un error al insertar el animal: " .$nombre_animal .$ex;
                    
                    echo json_encode($state);
                }

    }

    function editaranimal($param){
        extract($param);
        $sql ="UPDATE animales SET categoria_animal='$categoria_animal' where codigo_animal=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_animal))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function consultaranimales($param){
        extract($param);
        $sql = "select * from animales";
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

    function consultaranimal($param){
        extract($param);
        $sql ="select * from animales where codigo_animal=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_animal))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function eliminaranimal($param){
        extract($param);
        $sql ="DELETE FROM animales WHERE codigo_animal=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_animal))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    }

}