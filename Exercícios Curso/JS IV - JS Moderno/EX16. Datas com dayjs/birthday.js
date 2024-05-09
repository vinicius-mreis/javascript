const dayjs = require("dayjs")

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs() // padrão: o dia de hoje
  const ageInYears = today.diff(birthday, 'year') // calcular a diferença entre uma data e outra
  const nextBirthday = birthday.add(ageInYears + 1, 'year') // adicionar um intervalo de tempo a uma data
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1 // aproximar +1

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`) // exibir uma data em um formato específico (format)
  console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("1995-09-02")