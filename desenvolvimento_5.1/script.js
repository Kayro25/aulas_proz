titulo = document.querySelector("#titulo")
a = document.querySelector("a")
ul = document.querySelector("ul")
listaOrdenada = document.querySelector("#lista-ordenada")

titulo.innerText = "Título"
a.innerText = "Proz"

ul.innerHTML = `<li>a</li>
<li>b</li>
<li>c</li>`

listaOrdenada.innerHTML = `<li><a href="https://www.google.com.br/">Google</a></li>
<li><a href="https://github.com/">GitHub</a></li>
<li><a href="https://www.twitch.tv/">Twitch</a></li>`