import cheerio from 'cheerio'
import hljs from 'highlight.js'

export const parse = (body) => {
    const $ = cheerio.load(body)

    $('pre code').each((_, elm) => {
        const result = hljs.highlightAuto($(elm).text())
        $(elm).html(result.value)
        $(elm).addClass('hljs')
    })

    const headings = $('h1, h2, h3').toArray()
    const tableOfContents = headings.map((data) => ({
        // @ts-ignore
        text: data.children[0].data,
        id: data.attribs.id,
        name: data.name,
    }))

    return { highlightedContents: $.html(), tableOfContents }
}
