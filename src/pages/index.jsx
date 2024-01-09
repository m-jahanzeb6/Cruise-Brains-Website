import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllServices } from '@/lib/getAllServices'
import { formatDate } from '@/lib/formatDate'
import {DNITesting} from "@/lib/DNI";

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

function Service({ service }) {
  return (
    <Card as="service">
      <Card.Title href={`/services/${service.slug}`}>
        {service.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={service.date} decorate>
        {formatDate(service.date)}
      </Card.Eyebrow>
      <Card.Description>{service.description}</Card.Description>
      <Card.Cta>Read more</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Contactus() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contact us</span>
      </h2>

      <div className="my-5 grid gap-6 md:grid-cols-1">
        <div className="flex flex-col">
          <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Name:
          </label>
          <input
            type="text"
            placeholder="Full Name"
            aria-label="Name"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Email:
          </label>
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
        </div>
      </div>
      <div className="ml-auto flex w-24 justify-end">
        <Button type="submit" className={`w-20`}>
          Send
        </Button>
      </div>
    </form>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ services }) {
  return (
    <>
      <Head>
        <title>Cruise Brains - Software development company</title>
        {/*{DNITesting()}*/}
        <meta name="description" />
      </Head>
      <Container className="mt-14">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            CruiseBrains
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            At CruiseBrains, we are passionate about creating innovative
            software solutions that help businesses of all sizes thrive. With
            years of experience in the industry, our team of skilled developers
            is dedicated to delivering reliable and user-friendly software that
            meets the unique needs of each of our clients.
          </p>

          <br />

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            We use the latest technologies and agile methodologies to ensure
            that our clients receive the best possible service. We are committed
            to building strong relationships with our clients and providing
            exceptional support to help them succeed.
          </p>

          <br />

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            If you are in need of custom software development services, we
            encourage you to contact us to learn more about how we can help your
            business thrive. We look forward to working with you!
          </p>

          {
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://twitter.com"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
              />
              <SocialLink
                href="https://instagram.com"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
              <SocialLink
                href="https://github.com"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://linkedin.com"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          }
        </div>
      </Container>
      <Photos />

      <Container className="mt-24 md:mt-28 ">
        <div className="lg: w-full justify-start rounded-lg py-2 text-center text-5xl uppercase text-zinc-600 dark:text-zinc-300 lg:flex">
          <h1>Our Services</h1>
        </div>
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {services.map((service) => (
              <Service key={service.slug} service={service} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Contactus />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      services: (await getAllServices())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
