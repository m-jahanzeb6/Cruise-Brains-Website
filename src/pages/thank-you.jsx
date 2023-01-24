import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank you - CruiseBrains</title>
        <meta name="description" content="Thank you for getting in touch!." />
      </Head>
      <SimpleLayout
        title="Thank you for getting in touch!"
        intro="Thank you for reaching out to our company . We are grateful for the opportunity to connect with you and look forward to discussing your needs or interests further ."
      />
    </>
  )
}
