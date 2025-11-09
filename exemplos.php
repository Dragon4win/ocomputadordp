<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="meuestilo.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demos</title>
</head>
<body>
    <?php session_start();
    if(isset($_GET["parabens"])){
        echo "<div id='parabens' class='fixeddp'><div id='nome' class='nome'><h2>".$_SESSION['nome']."</h2><h1>Parabens!!!</h1></div><div id='flys'></div></div>";
    }
    ?>
    <script>window.onload = ()=>{parabens()}</script>
    <script src="http://localhost/git/meujs.js"></script>
</body>
</html>