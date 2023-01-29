class Terceiro {
  constructor() {}
  iniciar() {
    const dados = require('./json/dados.json')

    var list = []
    var listMedia = []
    dados.forEach(element => {
      if (element.valor > 0) {
        list.push(element)
      }
    })
    const average =
      list.reduce((total, next) => total + next.valor, 0) / list.length
    dados.forEach(element => {
      if (element.valor > average) {
        listMedia.push(element)
      }
    })
    console.log(
      'Maior Valor de Faturamento no Mês',
      Math.max.apply(
        Math,
        dados.map(function (o) {
          return o.valor
        })
      )
    )
    console.log(
      'Menor Valor de Faturamento do Mês',
      Math.min.apply(
        Math,
        list.map(function (o) {
          return o.valor
        })
      )
    )
    console.log(
      'Número de dias no mês em que o valor de faturamento diário foi superior à média mensal',
      listMedia
    )
  }
}

let processo = new Terceiro()
processo.iniciar()
