import DungeonData from './dungeons'

function dailyHunter() {
  const hunterQuests = []
  let i = 1

  Object.entries(DungeonData.Dungeons).forEach(([key, value]) => {
    const data = {
      id: `daily-hunter-${i}`,
      name: key,
      visible: true,
      quests: [
        {
          id: `daily-hunter-${i}-0`,
          name: `Donjon du jour lv.${key}`,
          visible: true,
          completed: false,
          lastUpdated: null,
        },
      ],
    }
    let index = 1
    value.forEach(dj => {
      data.quests.push({
        id: `daily-hunter-${i}-${index}`,
        name: `Semence : ${dj}`,
        visible: true,
        completed: false,
        lastUpdated: null,
      })
      index++
      data.quests.push({
        id: `daily-hunter-${i}-${index}`,
        name: `Drop : ${dj}`,
        visible: true,
        completed: false,
        lastUpdated: null,
      })
      index++
    })
    i++
    hunterQuests.push(data)
  })
  return hunterQuests
}

function parseDungeon(data, keyID) {
  const hunterQuests = []
  let i = 1

  Object.entries(data).forEach(([key, value]) => {
    const data = { id: `${keyID}-${i}`, name: key, data: [] }
    let index = 1
    index++
    value.forEach(item => {
      const ci = `${keyID}-${i}-${index}`
      data.data.push({
        id: ci,
        name: item,
        visible: true,
        completed: false,
        lastUpdated: null,
      })
      index++
    })
    i++
    hunterQuests.push(data)
  })
  return hunterQuests
}

// [type(daily)][subtype(base)][mainValue][subValue][subSubValue]
export const daily = {
  hunter: dailyHunter(),
}

export const weekly = {
  bu: parseDungeon(DungeonData.bu, 'weekly-bu'),
}
export const monthly = []
