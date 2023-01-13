import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllServices } from '@/lib/getAllServices'
import { formatDate } from '@/lib/formatDate'


function Service({ service }) {
  return (
    <service className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/services/${service.slug}`}>
          {service.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={service.date}
          className="md:hidden"
          decorate
        >
          {formatDate(service.date)}
        </Card.Eyebrow>
        <Card.Description>{service.description}</Card.Description>
        <Card.Cta>Read more</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={service.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(service.date)}
      </Card.Eyebrow>
    </service>
  )
}

export default function ServicesIndex({ services }) {
  return (
    <>
      <Head>
        <title>Services - Cruise Brains</title>
        <meta
          name="description"
          content="Our expertise allows us to provide tailored solutions that meet the specific needs and challenges of each project, ensuring the success of our clients' initiatives."
          />
      </Head>
      <SimpleLayout
        title="Expert software development and technology solutions for your business needs."
        intro="Our expertise allows us to provide tailored solutions that meet the specific needs and challenges of each project, ensuring the success of our clients' initiatives."
        >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {services.map((service) => (
              <Service key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      services: (await getAllServices()).map(({ component, ...meta }) => meta),
    },
  }
}
