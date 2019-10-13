<?php
class planes{

    function agregarplan($param){
        extract($param);
        $sql = "INSERT INTO plan(
            codigo_plan, niños_plan, personas_plan,total_plan, codigop_plan)
            VALUES (?, ?, ?, ?, ?);";
        $rs = $conexion->getPDO()->prepare($sql);
        $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try {
                    $rs->execute(array($codigo_plan,$niños_plan, $personas_plan, $total_plan, $codigop_plan));
                      $state  = "Compraste el plan con codigo " .$codigop_plan ;
                     
                    echo json_encode($state);
                 } catch (Exception $ex) {
                    //$state[0] = print_r($ex, 1);
                    $state = "Ocurrio un error al comprar el plan: " .$codigop_plan .$ex;
                    
                    echo json_encode($state);
                }

    }


    function eliminarplan($param){
        extract($param);
        $sql ="DELETE FROM plan WHERE codigo_plan=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_plan))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    }


    function consultarplanes($param){
        extract($param);
        $sql = "select * from plan";
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

    function consultarplan($param){
        extract($param);
        $sql ="select * from plan where codigo_plan=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_plan))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }

}