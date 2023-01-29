var readline = require('readline')
var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

leitor.question(
  'digite um numero para validar se faz parte da sequencia de Fibonacci\n',
  function (answer) {
    var pegar = answer
    leitor.close()

    class Segundo {
      constructor() {}
      iniciar() {
        const parametrosOrigem = pegar
        var valor1 = 0
        var valor2 = 1
        var valor3 = 0

        if (!isNaN(parametrosOrigem)) {
          for (let i = 0; i < parametrosOrigem; i++) {
            valor3 = valor1 + valor2
            valor1 = valor2
            valor2 = valor3
            if (valor3 == parametrosOrigem) {
              console.log(
                'O número ' +
                  parametrosOrigem +
                  ' faz parte da sequência de Fibonacci.'
              )
              return
            } else if (valor3 > parametrosOrigem) {
              console.log(
                'O número digitado não faz parte da sequência de Fibonacci.'
              )
              return
            }
          }
        } else {
          console.log('Informe um numero.')
        }
      }
    }

    let processo = new Segundo()
    processo.iniciar()
  }
)
