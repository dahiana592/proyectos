<?php
class usuplan{

    function agregarusuplan($param){
        extract($param);
        $sql = "INSERT INTO usuplan(
            codigo_usuplan, codigo_usuario, codigo_plan, fecha_usuplan)
            VALUES (?, ?, ?, ?);";
        $rs = $conexion->getPDO()->prepare($sql);
        $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try {
                    $rs->execute(array($codigo_usuplan,$codigo_usuario, $codigo_plan, $fecha_usuplan));
                      $state  = "agregado correctamente el usuplan con nombre " .$codigo_usuplan ;
                     
                    echo json_encode($state);
                 } catch (Exception $ex) {
                    //$state[0] = print_r($ex, 1);
                    $state = "Ocurrio un error al insertar el usuplan: " .$codigo_usuplan .$ex;
                    
                    echo json_encode($state);
                }

    }

    function editarusuplan($param){
        extract($param);
        $sql ="UPDATE usuplan SET fecha_usuplan='$fecha_usuplan' where codigo_usuplan=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_usuplan))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function consultarusuplanes($param){
        extract($param);
        $sql = "select * from usuplan";
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

    function consultarusuplan($param){
        extract($param);
        $sql ="select * from usuplan where codigo_usuplan=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_usuplan))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function eliminarusuplan($param){
        extract($param);
        $sql ="DELETE FROM usuplan WHERE codigo_usuplan=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_usuplan))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    }

}