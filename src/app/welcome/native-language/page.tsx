'use client'

import { useRouter } from 'next/navigation'

import ListSelect from '@/components/list-select'

export default function NativeLanguage () {
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

    router.push('target-language')
  }

  return (
    <div className="h-full grid content-between">
      <main className="p-6 container-overflow">
        <article>
          <section>
            <h1 className="text-4xl font-light">
              What is your&nbsp;

              <span className="text-amber-400">
                native language
              </span>

              ?
            </h1>

            <p className="text-body mt-12">
              The lessons will compare your native language to the one you want to learn.
            </p>

            <form className="mt-12">
              <ListSelect
                selectOptions={languages}
                name="Native languages"
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
