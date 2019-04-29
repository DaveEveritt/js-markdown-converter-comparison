# Three Markdown JavaScript converters

(Marked enabled by default)

| [Marked.js](https://github.com/JefferyWang/marked) | [Remarkable.js](https://github.com/jonschlinkert/remarkable) | [Showdown.js](https://github.com/showdownjs/showdown) |
| --- | --- | --- |
| tables | no tables | tables: default false |
| [class="lang-js"](https://github.com/JefferyWang/marked#highlight) (prism.js works) | [class="language-js"](https://github.com/jonschlinkert/remarkable#syntax-highlighting highlight.js) | class="js language-js" (GFM [Linguist](https://github.com/github/linguist)) |
| no definition lists | no definition lists | no definition lists |
| `marked()` | `md.render()` | converter.makeHtml() |
