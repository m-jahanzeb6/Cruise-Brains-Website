import glob from 'fast-glob'
import * as path from 'path'

async function importService(serviceFilename) {
  let { meta, default: component } = await import(
    `../pages/services/${serviceFilename}`
  )
  return {
    slug: serviceFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllServices() {
  let serviceFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/services'),
  })

  let services = await Promise.all(serviceFilenames.map(importService))

  return services.sort((a, z) => new Date(z.date) - new Date(a.date))
}
