<?php
class veterinario{

    function agregarvete($param){
        extract($param);
        $sql = "INSERT INTO veterinario(
            codigo_veterinario, fecha_veterinario, encargado_veterinario, codigo_animal)
            VALUES (?, ?, ?, ?);";
        $rs = $conexion->getPDO()->prepare($sql);
        $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try {
                    $rs->execute(array($codigo_veterinario,$fecha_veterinario, $encargado_veterinario, $codigo_animal));
                      $state  = "agregada correctamente el veterinario con nombre " .$codigo_veterinario ;
                     
                    echo json_encode($state);
                 } catch (Exception $ex) {
                    //$state[0] = print_r($ex, 1);
                    $state = "Ocurrio un error al insertar el veterinario: " .$codigo_veterinario .$ex;
                    
                    echo json_encode($state);
                }

    }

    function editarvete($param){
        extract($param);
        $sql ="UPDATE veterinario SET fecha_veterinario='$fecha_veterinario' where codigo_veterinario=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_veterinario))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function consultarvetes($param){
        extract($param);
        $sql = "select * from veterinario";
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

    function consultarvete($param){
        extract($param);
        $sql ="select * from veterinario where codigo_veterinario=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_veterinario))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function eliminarvete($param){
        extract($param);
        $sql ="DELETE FROM veterinario WHERE codigo_veterinario=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_veterinario))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    }

}