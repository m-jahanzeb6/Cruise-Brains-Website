import React from 'react'
import { Button } from '@/components/Button'

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
function Form() {
  return (
    <div className="order-last grid grid-flow-col lg:grid-flow-row lg:pl-20">
      <form
        action="/thank-you"
        className="mx-auto mt-10 w-full rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      >
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-2">Apply Here</span>
        </h2>
        <p className=" pt-2 text-xs text-zinc-900 dark:text-zinc-100">
          Fill up required information asking in the form.
        </p>

        <div className="my-5 grid grid-cols-1 gap-6">
          <div className="w-full">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Name:
            </span>
            <input
              type="text"
              placeholder="Name"
              aria-label="Name"
              required
              className="mt-2 w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
          </div>

          <div className="w-full">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Email:
            </span>
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
              className="mt-2 w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
          </div>

          <div className="w-full">
            <span className="py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Summary:
            </span>
            <textarea
              type="text"
              placeholder="Summary"
              aria-label="Summary"
              required
              className="mt-2 w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-5 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400  focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
          </div>

          <div className="w-full">
            <span className="my-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Resume:
            </span>
            <label
              for="dropzone-file"
              class="mx-auto mt-2 flex w-full cursor-pointer flex-col items-center rounded-xl border-zinc-900/10 bg-white px-3 py-10 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 hover:border-teal-500 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <h2 class="mt-4 text-xl font-medium tracking-wide text-zinc-900 dark:text-zinc-100">
                Upload Resume
              </h2>
              <input id="dropzone-file" type="file" class="hidden " />
            </label>
          </div>
        </div>
        <div className="ml-auto w-24 justify-start">
          <Button type="submit" className={`w-20`}>
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
