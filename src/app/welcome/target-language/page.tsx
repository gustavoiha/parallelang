'use client'

import { useRouter } from 'next/navigation'

import ListSelect from '@/components/list-select'

export default function TargetLanguage () {
  const router = useRouter()

  const languages = [{
    id: '1',
    label: 'English'
  }, {
    id: '2',
    label: 'Português'
  }, {
    id: '3',
    label: 'Português'
  }, {
    id: '4',
    label: 'Português'
  }, {
    id: '5',
    label: 'Português'
  }, {
    id: '6',
    label: 'Português'
  }, {
    id: '7',
    label: 'Português'
  }, {
    id: '8',
    label: 'Português'
  }, {
    id: '9',
    label: 'Português'
  }]

  const handleOnSelectLanguage = (language: string) => {
    console.log(language)

    router.push('learning-goal')
  }

  return (
    <div className="h-full grid content-between">
      <main className="p-6 container-overflow">
        <article>
          <section>
            <h1 className="text-4xl font-light">
              What language do you&nbsp;

              <em className="text-amber-400 not-italic">
                want to learn
              </em>

              ?
            </h1>

            <p className="text-body mt-12">
              The lessons will compare the language you want to learn with your native language.
            </p>

            <form className="mt-12">
              <ListSelect
                selectOptions={languages}
                name="Target languages"
                onSelect={handleOnSelectLanguage}
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
