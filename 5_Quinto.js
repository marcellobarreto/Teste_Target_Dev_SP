class Quinto {
  constructor() {}
  iniciar() {
    var readline = require('readline')
    var leitor = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    leitor.question(
      'digite a sua palavra a ser invertida\n',
      function (answer) {
        var pegar = answer
        leitor.close()

        function inverterString(str) {
          var o = ''
          for (var i = str.length - 1; i >= 0; i--) {
            o += str[i]
          }
          return o
        }

        console.log(inverterString(pegar))
      }
    )
  }
}
let processo = new Quinto()
processo.iniciar()
