function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light'))
  // html.classList.remove('light')
  // else(html.classList.add('light'))

  //O classlist.toggle faz a mesma coisa que o código acima

  html.classList.toggle("light")

  //Mudança de imagem abaixo

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  //Mudança de alt da imagem

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Raphael com roupas brancas, levantando uma caneca de café."
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Raphael Tardin segurando seus dois cachorros da raça pug no colo e um lago com árvores ao fundo!"
    )
  }
}
