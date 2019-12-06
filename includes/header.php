<header>
  <img src="img/logo.png" alt="Logo Bro7hers">
  <nav>
    <table>
      <tr>
        <td></td>
        <td class="menuLink"
          <?phpif(basename(__FILE__) == 'index.php')
              echo "id=\"currentNavPage\"";?>
          ><a href="index.php">Journal</a></td>
        <td class="menuLink"
          <?phpif(basename(__FILE__) == 'moleOfDuty.php')
              echo "id=\"currentNavPage\"";?>
          ><a href="moleOfDuty.php">Mole Of Duty</a></td>
        <td class="menuLink"
          <?phpif(basename(__FILE__) == 'gameOfBox.php')
              echo "id=\"currentNavPage\"";?>
          ><a href="gameOfBox.php">Game of Box</a></td>
        <td class="menuLink"
          <?phpif(basename(__FILE__) == 'gameOfBox.php')
              echo "id=\"currentNavPage\"";?>
          ><a href="team.php">L'équipe</a></td>
        <td></td>
      </tr>
    </table>
  </nav>
</header>
