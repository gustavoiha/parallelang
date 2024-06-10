'use client'

import ListSelect from '@/components/list-select'

export default function LearningGoal () {
  const goals = [{
    id: '1',
    label: 'Vacationing'
  }, {
    id: '2',
    label: 'Business meetings'
  }, {
    id: '3',
    label: 'Fluency'
  }, {
    id: '4',
    label: 'Language exams'
  }]

  const handleOnSelectGoal = (goal: string) => {
    console.log(goal)
  }

  return (
    <div className="h-full grid content-between">
      <main className="p-6 container-overflow">
        <article>
          <section>
            <h1 className="text-4xl font-light">
              What are you learning&nbsp;

              <span className="text-amber-400">
                Italian&nbsp;
              </span>

              for?
            </h1>

            <form className="mt-12">
              <ListSelect
                selectOptions={goals}
                name="Learning goals"
                onSelect={handleOnSelectGoal}
              />
            </form>
          </section>
        </article>
      </main>

      <footer>
      </footer>
    </div>
  )
}
