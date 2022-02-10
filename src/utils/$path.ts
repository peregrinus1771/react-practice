/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  blog: {
    _post: (post: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog/[post]' as const, query: { post }, hash: url?.hash })
    })
  },
  category: {
    _category: (category: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/category/[category]' as const, query: { category }, hash: url?.hash })
    })
  },
  search: {
    $url: (url?: { hash?: string }) => ({ pathname: '/search' as const, hash: url?.hash })
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
