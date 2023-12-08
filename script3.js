const familia = ["Santiago", "Liliana", "Carlos", "Camila", "Fernando", "Zhuo", "Rafael", "Alejandra", "Mafer", "Joaquin"];

document.write("<p>Nombres de la familia:</p>");
document.write("<ul>");
for (let i = 0; i < familia.length; i++) {
  document.write("<li>" + familia[i] + "</li>");
}
document.write("</ul>");
