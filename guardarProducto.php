<?php
        $servidor = 'localhost';
        $usuario = 'root';
        $pass = 'root';
        $bd = 'fzarate';
        //Creando mi conexion

        $con = new mysqli($servidor,$usuario,$pass,$bd);
        if($con->connect_errno){
        die('No me pude conectar');
        }

    /*    function altaProducto($nombre, $codigo, $may, $men){
            $query="INSERT INTO productos(dfechaIn, nombreProducto, codigoProducto, mayoreo, menudeo)
                VALUES(NOW(), '$nombre', $codigo, $may, $men)";
            $resultado = $this->mysql->query($query);
            if($this->mysql->insert_id){
                return true;
            }
            else{
                return false
            }
        }
*/
   if(isset($_POST)){
        $nombre = ($_POST["nombre"]);
        $codigo = ($_POST["codigo"]);
        $tipo = ($_POST["tipo"]);
        if($tipo == 1){
            $men = 1;
            $may = 0;
        }
        else {
            $men = 0;
            $may = 1;
        }
        $query="INSERT INTO productos(fechaAlta, nombreProducto, codigoProducto, mayoreo, menudeo)
            VALUES(NOW(), '$nombre', $codigo, $may, $men)";
        $resultado = $con->query($query);
        if($con->insert_id){
            echo '{success: true}';
        }
        else{
            echo '{success: false}';
        }


    }
    else {
        echo '{success: false}';
    }
    //echo "success";
?>
