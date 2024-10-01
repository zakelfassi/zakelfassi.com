import dynamic from 'next/dynamic'
import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import YouTube from './YouTube'
import fs from 'fs'
import path from 'path'

const experimentComponents: Record<string, React.ComponentType> = {}

const experimentsDir = path.join(process.cwd(), 'components', 'experiments')
if (fs.existsSync(experimentsDir)) {
  fs.readdirSync(experimentsDir).forEach((file) => {
    if (file.endsWith('.tsx')) {
      const componentName = file.replace(/\.[^/.]+$/, '')
      experimentComponents[componentName] = dynamic(() => import(`./experiments/${file}`), {
        ssr: false,
      })
    }
  })
}

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  YouTube,
  ...experimentComponents,
}
