import LinkBlock from '@/components/link-block'

export default function WelcomeIntroduction () {
  return (
    <div className="h-full grid content-between">
      <main className="p-6">
        <article>
          <section>
            <h1 className="text-4xl font-light">
              Welcome to&nbsp;

              <span className="font-medium text-amber-400">
                Parallelang
              </span>

              !
            </h1>

            <p className="text-2xl mt-20 font-light">
              How does it work?
            </p>

            <p className="text-body mt-12">
              You choose a text from a selection of lessons and read parallely in a language you know and want to learn.
            </p>
          </section>
        </article>
      </main>

      <footer>
        <LinkBlock label="See how it works" href="/welcome/tutorial" />
      </footer>
    </div>
  )
}
