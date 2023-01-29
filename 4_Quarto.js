class Quarto {
  constructor() {}
  iniciar() {
    function porcentagem(estado, total) {
      return Math.round((100 * estado) / total, 2)
    }

    let sp = 67836.43
    let rj = 36678.66
    let mg = 29229.88
    let es = 27165.48
    let outros = 19849.53

    let total = sp + rj + mg + es + outros

    console.log('Porcentagem que SP faturou:' + porcentagem(sp, total) + '%')
    console.log('Porcentagem que RJ faturou:' + porcentagem(rj, total) + '%')
    console.log('Porcentagem que MG faturou:' + porcentagem(mg, total) + '%')
    console.log('Porcentagem que ES faturou:' + porcentagem(es, total) + '%')
    console.log(
      'Porcentagem que outros faturou:' + porcentagem(outros, total) + '%'
    )
  }
}
let processo = new Quarto()
processo.iniciar()
