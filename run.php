<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="About Raymart De Guzman, Raymart, portfolio, contact, about, Booxi, Alandodsaputra, NBAStatsPro, GitHub, projects, more projects">
    <meta name="author" content="Raymart De Guzman, Software Engineering, Software developer, junior software engineer, developer, engineer, engineering, Java, jQuery, javaScript, PHP">
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <link rel="icon" href="../favicon.ico" type="image/x-icon">
    <title>NbaPlayersBio</title>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="css/nbastatspro.css" rel="stylesheet">

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
                    <li class="active"><a href="../index.html">Home</a></li>
                    <li><a href="index.php">Search</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="page-header">
        <h2>Get the new updates</h2>
    </div>
    <div class="margin-bottom-1em" id="warning-container"></div>
    <div id="col-md-12">
        <div id='loading'>
            <div id="loading-img"></div>
        </div>
    </div>
    <div class="col-md-12 padding-reset margin-bottom-1em">
        <div class="col-md-6 padding-reset ">
            <div class="input-group">
                <span class="input-group-addon no-border-radius" id="basic-addon1">Password</span>
                <input id="run-password" type="password" class="form-control no-border-radius">
            </div>
        </div>
    </div>
    <div class="col-md-12 margin-bottom-1em padding-reset">
        <div class="input-group" >
            <span class="input-group-btn">
                <button id="scrap-player-data" class="btn btn-primary" type="button">Run</button>
            </span>
        </div>
    </div>
</div>
<footer class="footer">
    <div class="container">
        <p class="text-muted text-center">Copyright © Raymart.ca 2017</p>
    </div>
</footer>
<script src="js/jquery-3.1.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/util.js"></script>
<script src="js/run.js"></script>
<script src="js/app.js"></script>
<script src="js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>