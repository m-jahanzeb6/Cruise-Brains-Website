import { Button } from '@/components/Button'
import Head from 'next/head'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}
export default function Contactus() {
  return (
    <>
      <Head>
        <title>Contact - Cruise Brains</title>
        <meta
          name="description"
          content="I’m Cruise Brains. I live in New York City, where I design the future."
        />
      </Head>
      <div>
        <div className="mx-auto mt-10 w-4/5 rounded-2xl lg:max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Please get in touch and our expert support team will answer all your
            questions.
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Email us with any question or inquires. We should happy to answer
            your questions and set up a meeting with you.
          </p>
        </div>

        <form
          action="/thank-you"
          className="mx-auto mt-10  w-4/5 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 lg:max-w-6xl"
        >
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <MailIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Contact us</span>
          </h2>
          <p className="ml-2 pt-2 text-xs text-zinc-900 dark:text-zinc-100">
            If you require any further information, please feel free to contact
            us.{' '}
          </p>

          <div className="my-5 grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              aria-label="Name"
              required
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
            <input
              type="number"
              placeholder="Contact"
              aria-label="Contact"
              required
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
            <input
              type="file"
              placeholder="Upload Resume"
              aria-label="Upload Resmue"
              required
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
          </div>
          <div className="ml-auto flex w-24 justify-end">
            <Button type="submit" className={`w-20`}>
              Send
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
