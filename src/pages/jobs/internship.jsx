import { Container } from '@/components/Container'
import Form from '@/components/Form'
import React from 'react'
import Router from 'next/router'
import Head from 'next/head'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Internship(previousPathname) {
  return (
    <>
      <Head>
        <title>Intenship - CruiseBrains</title>
        <meta
          name="description"
          content="A World of Opportunities Awaits You at CruiseBrains"
        />
      </Head>
      <Container className="mt-16 px-5 sm:mt-32">
        {previousPathname && (
          <div className="lg:absolute lg:-top-14">
            <button
              type="button"
              onClick={() => Router.back()}
              aria-label="Go back to services"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <Form />

          <div className="lg:order-first lg:row-span-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Internship
              </h1>
            </div>

            <div className="mt-20 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <div>
                <h1 className="my-2 text-2xl text-zinc-800 dark:text-zinc-100">
                  About this position
                </h1>
                <p>
                  As an intern in a PHP development role, you would work with a
                  team of developers to assist in developing web applications
                  using the PHP programming language. You would be under the
                  guidance of a mentor or supervisor, who would provide you with
                  training and feedback on your work.
                </p>
              </div>

              <div className="w-full px-1">
                <h1 className="my-2 text-2xl text-zinc-800 dark:text-zinc-100">
                  Requirements
                </h1>
                <ul className="list-outside list-disc">
                  <li>Min Bachelor's Degree is required.</li>

                  <li>Understanding of programming fundamentals and OOP.</li>
                  <li>
                    Keeping up-to-date with the latest trends, techniques, and
                    technologies in PHP development.
                  </li>
                  <li>
                    Familiarity with web development concepts and technologies
                    such as HTML, CSS, JavaScript and SQL.
                  </li>
                  <li>
                    Learning and adapting to company's development practices,
                    methodologies, and standards.
                  </li>
                  <li>Strong communication and teamwork skills.</li>
                </ul>
              </div>
              <div className="w-full px-1">
                <h1 className="my-2 text-2xl text-zinc-800 dark:text-zinc-100">
                  What will you do as an Interne?
                </h1>
                <ul className="list-outside list-disc">
                  <li>
                    Assisting in the development of web applications using PHP.
                  </li>

                  <li>Writing clean, efficient, and well-documented code.</li>

                  <li>
                    Collaborating with other team members to understand project
                    requirements and deliver solutions.
                  </li>
                  <li>
                    Learning and adapting to company's development practices,
                    methodologies, and standards.
                  </li>
                  <li>
                    Troubleshooting and debugging issues that arise during
                    development.
                  </li>
                  <li>
                    Keeping up-to-date with the latest trends, techniques, and
                    technologies in PHP development.
                  </li>
                </ul>
              </div>

              {/* <p>
              This internship position is an opportunity for you to gain
              hands-on experience, learn from experienced professionals and
              build a network of contacts in the field of PHP development. It
              can also provide you with a competitive edge when applying for
              full-time positions after graduation.
            </p> */}
              <p>
                To be successful in this role, you would need a good
                understanding of the PHP language, web development principles
                and best practices, as well as experience with web technologies
                such as HTML, CSS, and JavaScript. Strong communication and
                teamwork skills are also important for this role.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Internship
