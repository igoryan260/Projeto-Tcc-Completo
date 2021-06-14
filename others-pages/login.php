<?php
    require_once "../others-pages/conexao.php";

   // print_r($_POST);exit;

    if(isset($_POST['email']) && isset($_POST['senha'])){

        $email = $_POST['email'];

        if ($email==null) {
            echo "
                <script>
                    alert('Por favor, insira seu e-mail.');
                    history.back();
                </script>
            ";
        }else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "
                <script>
                    alert('Insira um e-mail válido!');
                    history.back();
                </script>
            ";

            #Inserir else if para mais validações//

        }else if($_POST['senha']==null){
            echo"
                <script>
                    alert('Por favor, insira a sua senha');
                    history.back();
                </script>
            ";
        
        }else{
            $senha = md5($_POST['senha']);
            $sql = $conexao -> query("SELECT Nome, Email, senha FROM usuario WHERE Email='$email' AND senha='$senha'");

            //print_r($conexao);exit;
            $dados = mysqli_fetch_array($sql);
            //echo $dados['nome'];exit;
            session_start();
            $_SESSION['email'] = $dados[2];
            $_SESSION['nome'] = strtoupper($dados[0]);

            if ($dados) {
                echo "
                    <script>
                        alert('Seja bem-vindo(a) {$_SESSION['nome']}');
                        location.href='../proveweb-system/index.php';  
                    </script>
                ";
            }else{
                echo "
                    <script>
                        alert('Usuário não encontrado, verifique novamente.');
                        history.back();
                    </script>
                ";
            }

            
        }


    }

