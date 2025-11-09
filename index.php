<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="meuestilo.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplos Fixes </title>
</head>
<body><center>
    <h1>Feliz aniversario!!!</h1>
    <p>Este plugin vai permitir congratular o aniversariante numa pag web ou numa app.</p>
    <form method="post">
        <input type="text" name="nome" id="nome" placeholder="Primeirp e Ultimo">
        <input type="submit" name="subpara" id="subpara" value="Enviar">
    </form>
    <?php if(isset($_POST['subpara'])){
        $nome = $_POST["nome"];
        session_start();
        $_SESSION["nome"] = $nome;
        echo "<script>document.location.href = 'http://localhost/git/exemplos.php?parabens=parabens'</script>";
    }
    ?>
    
    <hr>
    <h1>Jogo do galo</h1>
    <div id="tab"></div>
    <hr>
    <script src="http://localhost/git/meujs.js"></script></center>
</body>
</html>