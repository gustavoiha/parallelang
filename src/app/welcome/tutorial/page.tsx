import LinkBlock from '@/components/link-block'

export default function WelcomeTutorial () {
  return (
    <div className="h-full grid content-between">
      <main className="p-6">
        <article>
          <section>
            <h1 className="text-4xl font-light">
              Explore each lesson&nbsp;

              <span className="text-amber-400">
                on your own
              </span>
            </h1>

            <p className="text-2xl mt-20 font-light">
              We recommend:
            </p>

            <ol className="text-body mt-12 list-decimal list-outside pl-4">
              <li>
                Listen to the foreign audio and repeat word by word
              </li>

              <li>
                Listen to the foreign audio while reading the native text
              </li>

              <li>
                Listen to the foreign audio while reading the foreign text
              </li>

              <li>
                Read the foreign text and see how much you understand
              </li>

              <li>
                Listen to the foreign audio repeating word by word
              </li>

              <li>
                Try the next lesson!
              </li>
            </ol>
          </section>
        </article>
      </main>

      <footer>
        <LinkBlock label="Choose languages" href="/welcome/native-language" />
      </footer>
    </div>
  )
}
