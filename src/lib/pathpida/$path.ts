/* eslint-disable */
// prettier-ignore
import { Query as Query0 } from '../../pages/search'

// prettier-ignore
export const pagesPath = {
  article: {
    _post: (post: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/article/[post]' as const, query: { post }, hash: url?.hash })
    })
  },
  category: {
    _category: (category: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/category/[category]' as const, query: { category }, hash: url?.hash })
    })
  },
  search: {
    $url: (url: { query: Query0, hash?: string }) => ({ pathname: '/search' as const, query: url.query, hash: url.hash })
  },
  tag: {
    _tag: (tag: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/tag/[tag]' as const, query: { tag }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
