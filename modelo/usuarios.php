<?php
class usuarios{
    function agregarusu($param){
        extract($param);
        $sql = "INSERT INTO usuarios(
            codigo_usuario, nombre_usuario, apellido_usuario, cedula_usuario,edad_usuario, tel_usuario)
            VALUES (?, ?, ?, ?, ?, ?);";
        $rs = $conexion->getPDO()->prepare($sql);
        $conexion->getPDO()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                try {
                    $rs->execute(array($codigo_usuario,$nombre_usuario, $apellido_usuario, $cedula_usuario, $edad_usuario, $tel_usuario));
                      $state  = "agregado correctamente el usuario con nombre " .$nombre_usuario ;
                     
                    echo json_encode($state);
                 } catch (Exception $ex) {
                    //$state[0] = print_r($ex, 1);
                    $state = "Ocurrio un error al insertar el usuario: " .$nombre_usuario .$ex;
                    
                    echo json_encode($state);
                }

    }

    function editarusu($param){
        extract($param);
        $sql ="UPDATE usuarios SET cedula_usuario='$cedula_usuario' where codigo_usuario=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_usuario))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function consultarusus($param){
        extract($param);
        $sql = "select * from usuarios";
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

    function consultarusu($param){
        extract($param);
        $sql ="select * from usuarios where codigo_usuario=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_usuario))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    
    }


    function eliminarusu($param){
        extract($param);
        $sql ="DELETE FROM usuarios WHERE codigo_usuario=?";
        $rs = $conexion->getPDO()->prepare($sql);
        if ($rs->execute(array($codigo_usuario))) {
            if ($element = $rs->fetchAll(PDO::FETCH_ASSOC)) {
                foreach ($element as $element) {
                    $array[] = $element;
                }
            }
        }
        echo json_encode(($array));
    }
}