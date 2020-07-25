# Source code for an Eleventy site

Learning how to use this thing: https://www.11ty.dev

## Notes

We're using a `Makefile` to create rules for building, serving, and cleaning
the website.

* Build the website: `make` or `make all`
* Serve the HTML to http://localhost:8080: `make serve`
* Clean the built HTML files (the `_site` folder): `make clean`

The page content (the text) is created in Markdown files (`.md`) and converted
to HTML by eleventy. The site layout (the HTML around the content) is defined
in "templates" defined in the `_includes` folder. The template language is
called [Liquid](https://shopify.github.io/liquid/). Eleventy will combine the
content (Markdown) with the template (Liquid) to generate the HTML files in
`_site`.

All of the text in the Markdown file is included in the `{{ content }}`
variable in the template. Extra variables can be defined in the header of the
Markdown file. These can then be accessed in the template using the same
syntax (for example `{{ date }}` and `{{ title }}`.

**Sidenote:** Dates are automatically formatted by eleventy.
