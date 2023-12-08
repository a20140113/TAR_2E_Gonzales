document.write("Script 1 <br>")

function numerospares() {
    for (let i = 2; i < 1000; i += 2) {
      if (i < 100) {
        document.write(i + "<br>");
      }
    }
  }
  numerospares();