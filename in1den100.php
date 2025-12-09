<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <title>Bài tập in 1-100</title>
  <style>
    body {
        font-family: monospace;
        font-size: 16px;
    }
    .number {
      display: inline-block;
      width: 25px;
      text-align: right;
      font-family: monospace;
      margin-right: 2px;
    }

    .odd {
      color: green;
      font-weight: bold;
      font-style: italic;
    }

    .even {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <?php
    echo '<div>';
    for ($i = 1; $i <= 100; $i++) {
        $class = ($i % 2 === 0) ? 'even' : 'odd';
        echo "<span class=\"number $class\">$i</span>";

        if ($i % 20 === 0) {
            echo "<br>";
        }
    }
    echo '</div>';
  ?>

</body>
</html>