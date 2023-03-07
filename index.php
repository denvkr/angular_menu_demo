<?php
function callback($buffer)
{
    // replace all the apples with oranges
    return $buffer;//str_replace("apples", "oranges", $buffer));
}

ob_start("callback");

?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>test2</title>
<link rel="icon" type="image/x-icon" href="rocket.ico">
<link rel="stylesheet" href="style.css">
<script>var exports = {};</script>
<script type="module" src="Point.js"></script>
<script type="module" src="getWidget.js"></script>
<script type="text/javascript" src="tsdemo.js"></script>
</head>
<body>
<!-- page content -->
</body>
</html>

<?php

$buffer = ob_end_flush();

echo 'test2';
echo '<script type="javascript" src="tsdemo.js"></script>';
phpinfo();
?>