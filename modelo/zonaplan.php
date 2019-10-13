<?php
class zonaplan{
    function agregarzp($param){
        extract($param);
        $sql = "INSERT INTO zonaplan(
            codigo_zonaplan, codigo_zona, codigo_plan)
            VALUES (?, ?, ?);";
        $rs = $conexion->getPDO()->prepare($sql);
        $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try {
                    $rs->execute(array($codigo_zonaplan,$codigo_zona, $codigo_plan));
                      $state  = "La zona plan fue agregada correctamente con codigo " .$codigo_zonaplan ;
                     
                    echo json_encode($state);
                 } catch (Exception $ex) {
                    //$state[0] = print_r($ex, 1);
                    $state = "Ocurrio un error al insertar la zona plan : " .$codigo_zonaplan;
                    
                    echo json_encode($state);
                }

    }      

    function consultarzps($param){
        extract($param);
        $sql = "select * from zonaplan";
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

    function consultarzp($param){
        extract($param);
        $sql ="select * from zonaplan where codigo_zonaplan=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_zonaplan))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


}