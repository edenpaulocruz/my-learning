const heroes = [
  { name: 'Pelé', wins: 250, defeats: 100 },
  { name: 'Zico', wins: 200, defeats: 105 },
  { name: 'Ronaldinho Gaúcho', wins: 150, defeats: 65 },
  { name: 'Ronaldo Fenômeno', wins: 120, defeats: 60 },
  { name: 'Romário', wins: 100, defeats: 70 },
  { name: 'Garrincha', wins: 60, defeats: 45 },
  { name: 'Neymar', wins: 25, defeats: 18 }
]

const levels = [
  { wins: 100, status: 'Imortal' },
  { wins: 90, status: 'Lendário' },
  { wins: 80, status: 'Diamante' },
  { wins: 50, status: 'Ouro' },
  { wins: 20, status: 'Prata' },
  { wins: 10, status: 'Bronze' }
]

function returnRankingLevel(balance) {
  let rankingLevel = 'Ferro'

  for (const level of levels) {
    if (balance > level.wins) {
      rankingLevel = level.status
      break
    }
  }

  return rankingLevel
}

for (const hero of heroes) {
  const balance = hero.wins - hero.defeats
  const rankingLevel = returnRankingLevel(balance)

  console.log(`O Herói de nome ${hero.name} está no nível de ${rankingLevel}`)
}
