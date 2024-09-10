import dayjs from 'dayjs'
import { client, db } from '.'
import { goalCompletions, goals } from './schema'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Acordar cedo', desiredWeeklyFrequency: 7 },
      { title: 'Estudar', desiredWeeklyFrequency: 3 },
      { title: 'Correr', desiredWeeklyFrequency: 1 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  await db
    .insert(goalCompletions)
    .values([{ goalId: result[1].id, createdAt: startOfWeek.toDate() }])
}

seed().finally(() => {
  client.end()
})
