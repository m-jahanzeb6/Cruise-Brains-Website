import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'
import portraitImage2 from '@/images/portrait-2.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <sp an className="ml-4">
          {children}
        </sp>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - CruiseBrains</title>
        <meta
          name="description"
          content="Leading the Way in Software Development"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          
        <div className="lg:pl-20 grid grid-flow-col lg:grid-flow-row">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>

            <div className="max-w-xs px-2.5 lg:max-w-none lg:mt-10 ">
              <Image
                src={portraitImage2}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>

          </div>
          
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Leading the Way in Software Development.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                We are a team of highly skilled and dedicated software
                developers who are passionate about creating innovative
                solutions for businesses of all sizes. With years of experience
                in the industry, we have honed our skills to provide top-notch
                custom software development services to our clients.
              </p>
              <p>
                Our team is committed to using the latest technologies and agile
                methodologies to deliver user-friendly, reliable software that
                helps our clients streamline their operations and increase
                efficiency. We work closely with our clients to understand their
                unique needs and challenges, and we use this understanding to
                develop customized solutions that meet their specific goals.
              </p>
              <p>
                In addition to our expertise in software development, we are
                also committed to providing exceptional service and support to
                our clients. We believe that building strong relationships with
                our clients is key to their success, and we strive to go above
                and beyond to ensure their satisfaction.
              </p>
              <p>
                If you are in need of custom software development services, we
                encourage you to reach out to us to learn more about how we can
                help your business succeed. We look forward to working with you!
              </p>
            </div>
          </div>
          
        

        </div>
      </Container>
    </>
  )
}
