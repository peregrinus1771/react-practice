import * as cheerio from 'cheerio'
import hljs from 'highlight.js'

export function parseForTableOfContents(
    body: string,
): { text: string; id: string; name: string }[] {
    const $ = cheerio.load(body)
    const headings = $('h1, h2, h3').toArray()
    console.log(headings)
    const toc = headings.map((data) => ({
        text: data.children[0].data,
        id: data.attribs.id,
        name: data.name,
    }))
    return toc
}

export function parseToHighlight(body: string) {
    const $ = cheerio.load(body)
    $('pre code').each((_, element) => {
        const result = hljs.highlightAuto($(element).text())
        $(element).html(result.value)
        $(element).addClass('hljs')
    })
    return $.html()
}
