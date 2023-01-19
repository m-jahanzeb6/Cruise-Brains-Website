import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'

import { getAllServices } from './getAllServices'

export async function generateRssFeed() {
  let services = await getAllServices()
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  let author = {
    name: 'Cruise Brains',
    email: '',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (let service of services) {
    let url = `${siteUrl}/services/${service.slug}`
    let html = ReactDOMServer.renderToStaticMarkup(
      <service.component isRssFeed />
    )

    feed.addItem({
      title: service.title,
      id: url,
      link: url,
      description: service.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(service.date),
    })
  }

  await mkdir('./public/rss', { recursive: true })
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ])
}