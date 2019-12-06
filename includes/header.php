<?php
    $filepath = $_SERVER["PHP_SELF"];
    $fileName = explode("/",$filepath)[2];
?>

<header>
  <img src="img/logo.png" alt="Logo Bro7hers">
  <nav>
    <table>
      <tr>
        <td></td>
        <td class="menuBox"
          <?php if($fileName == 'index.php')
                  echo "id=\"highlightedMenuBox\"";?>
          ><a href="index.php">Journal</a></td>
        <td class="menuBox"
          <?php if($fileName == 'moleOfDuty.php')
                  echo "id=\"highlightedMenuBox\"";?>
          ><a href="moleOfDuty.php">Mole Of Duty</a></td>
        <td class="menuBox"
          <?php if($fileName == 'gameOfBox.php')
                  echo "id=\"highlightedMenuBox\"";?>
          ><a href="gameOfBox.php">Game of Box</a></td>
        <td class="menuBox"
          <?php if($fileName == 'team.php')
                  echo "id=\"highlightedMenuBox\"";?>
          ><a href="team.php">L'équipe</a></td>
        <td></td>
      </tr>
    </table>
  </nav>
</header>
