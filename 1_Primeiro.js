class Primeiro {
  constructor() {}
  iniciar() {
    var INDICE = 13
    var SOMA = 0
    var K = 0

    for (let i = 0; i < INDICE; i++) {
      if (K < INDICE) {
        K = K + 1
        SOMA = SOMA + K
      }
    }
    console.log(SOMA)
  }
}

let processo = new Primeiro()
processo.iniciar()
