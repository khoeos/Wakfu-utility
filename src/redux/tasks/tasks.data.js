import constants, { categories } from './task.constants'
import DungeonData from '../../data/dungeons'

function dailyHunter() {
  const hunterQuests = []
  let i = 1

  Object.entries(DungeonData.Dungeons).forEach(([key, value]) => {
    hunterQuests.push({
      type: constants.daily,
      category: categories.daily.hunter,
      id: `${categories.daily.hunter}-${i}`,
      name: key,
      visible: true,
    })
    hunterQuests.push({
      type: constants.daily,
      category: categories.daily.hunter,
      child: true,
      id: `${categories.daily.hunter}-${i}-0`,
      parent: `${categories.daily.hunter}-${i}`,
      name: `Donjon du jour lv.${key}`,
      visible: true,
      completed: false,
      lastUpdated: null,
    })
    let index = 1
    value.forEach(dj => {
      hunterQuests.push({
        type: constants.daily,
        category: categories.daily.hunter,
        id: `${categories.daily.hunter}-${i}-${index}`,
        parent: `${categories.daily.hunter}-${i}`,
        child: true,
        name: `Semence : ${dj}`,
        visible: true,
        completed: false,
        lastUpdated: null,
      })
      index++
      hunterQuests.push({
        type: constants.daily,
        category: categories.daily.hunter,
        child: true,
        parent: `${categories.daily.hunter}-${i}`,
        id: `${categories.daily.hunter}-${i}-${index}`,
        name: `Drop : ${dj}`,
        visible: true,
        completed: false,
        lastUpdated: null,
      })
      index++
    })
    i++
  })
  return hunterQuests
}

function parseDungeon(data) {
  const hunterQuests = []
  let i = 1

  Object.entries(data).forEach(([key, value]) => {
    hunterQuests.push({
      type: constants.weekly,
      category: categories.weekly.bu,
      id: `${categories.weekly.bu}-${i}`,
      name: key,
      visible: true,
    })
    let index = 0
    index++
    value.forEach(item => {
      hunterQuests.push({
        type: constants.weekly,
        category: categories.weekly.bu,
        parent: `${categories.weekly.bu}-${i}`,
        child: true,
        id: `${categories.weekly.bu}-${i}-${index}`,
        name: item,
        visible: true,
        completed: false,
        lastUpdated: null,
      })
      index++
    })
    i++
  })
  return hunterQuests
}

let daily = [
  {
    type: constants.daily,
    category: categories.daily.base,
    id: `${categories.daily.base}-1`,
    name: `Almanax`,
    visible: true,
    completed: false,
    lastUpdated: null,
  },
  {
    type: constants.daily,
    category: categories.daily.base,
    id: `${categories.daily.base}-2`,
    name: 'Mod`Ule',
    visible: true,
    completed: true,
    lastUpdated: null,
  },
  {
    type: constants.daily,
    category: categories.daily.base,
    id: `${categories.daily.base}-3`,
    name: `Atelier Abandonné`,
    visible: true,
    completed: false,
    lastUpdated: null,
  },
  {
    type: constants.daily,
    category: categories.daily.base,
    id: `${categories.daily.base}-4`,
    name: `Guilde : Terminer un donjon`,
    visible: true,
    completed: false,
    lastUpdated: null,
  },
  {
    type: constants.daily,
    category: categories.daily.base,
    id: `${categories.daily.base}-5`,
    name: `Guilde : Crafter 10 objets`,
    visible: true,
    completed: false,
    lastUpdated: null,
  },
  {
    type: constants.daily,
    category: categories.daily.base,
    id: `${categories.daily.base}-6`,
    name: `Guilde : Tuer 10 monstres`,
    visible: true,
    completed: false,
    lastUpdated: null,
  },
  {
    type: constants.daily,
    category: categories.daily.base,
    id: `${categories.daily.base}-7`,
    name: `Nourrir les familiers/montiliers`,
    visible: true,
    completed: false,
    lastUpdated: null,
  },
  {
    type: constants.daily,
    category: categories.daily.base,
    id: `${categories.daily.base}-8`,
    name: `Tourmenteur`,
    visible: true,
    completed: false,
    lastUpdated: null,
  },
  {
    type: constants.daily,
    category: categories.daily.base,
    id: `${categories.daily.base}-9`,
    name: `Mihmol`,
    visible: true,
    completed: false,
    lastUpdated: null,
  },
]
daily = daily.concat(dailyHunter())

const weekly = parseDungeon(DungeonData.bu, 'weekly-bu')

const monthly = {
  type: constants.monthly,
  category: categories.monthly.base,
  id: `${categories.monthly.base}-7`,
  name: 'Boss Smasher',
  visible: true,
  completed: false,
  lastUpdated: null,
}

const task = daily.concat(weekly, monthly)

export default task
