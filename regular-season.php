<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
          content="About Raymart De Guzman, Raymart, portfolio, contact, about, Booxi, Alandodsaputra, NBAStatsPro, GitHub, projects, more projects">
    <meta name="author"
          content="Raymart De Guzman, Software Engineering, Software developer, junior software engineer, developer, engineer, engineering, Java, jQuery, javaScript, PHP">
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <title>NBAStatsPro</title>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="css/nbastatspro.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css"
          href="https://cdn.datatables.net/v/dt/jqc-1.12.4/pdfmake-0.1.27/dt-1.10.15/b-colvis-1.3.1/b-html5-1.3.1/b-print-1.3.1/r-2.1.1/datatables.min.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="container">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">NBAStatsPro</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a href="index.php">Home</a></li>
                    <li class="active"><a href="regular-season.php">Regular Season</a></li>
                </ul>
            </div>
        </div>
    </nav>


    <div class="row">
        <div id="col-md-12">
            <div id="loading">
                <div id="nbastatspro-loading-img"></div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <h3>Sortable Player Stats 2017-2018 Season</h3>
            <table id="sortable-stats" class="table display" cellspacing="0" width="100%"></table>
        </div>
    </div>
</div>
<footer class="footer">
    <div class="container">
        <p class="text-muted text-center">Copyright © NBAStatsPro.co.nf 2017</p>
    </div>
</footer>
<script src="js/jquery-3.1.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/util.js"></script>
<script src="js/stats_table.js"></script>
<script src="js/app.js"></script>
<script type="text/javascript"
        src="https://cdn.datatables.net/v/dt/jqc-1.12.4/pdfmake-0.1.27/dt-1.10.15/b-colvis-1.3.1/b-html5-1.3.1/b-print-1.3.1/r-2.1.1/datatables.min.js"></script>
<script src="js/ie10-viewport-bug-workaround.js"></script>


</body>
</html>
