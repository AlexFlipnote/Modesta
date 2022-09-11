import re
import os
import shutil

from markdown import markdown

re_colour = r"'([a-z\-]{1,})': (#[a-fA-F0-9]{3,6}),"


def template_html(content: str):
    """ The HTML template to use on all docs """
    return f"""
        <html>
            <head>
                <link href="/assets/modesta.css" type="text/css" rel="stylesheet">
                <link href="/assets/custom.css" type="text/css" rel="stylesheet">
            </head>
            <body class="dark-theme github">
                <section class="container">
                    {content}
                </section>
            </body>
        </html>
    """


# First copy Modesta over
for g in os.listdir("../dist"):
    if not g.endswith(".css"):
        continue

    shutil.copy(f"../dist/{g}", f"./assets/{g}")


# ----- Index Markdown -----
with open("../README.md", "r") as f:
    md = markdown(
        f.read(), extensions=["fenced_code"]
    )

with open("index.html", "w") as f:
    f.write(template_html(md))

# ----- CSS DOCS ----- #
with open("../scss/assets/_colours.scss", "r") as f:
    colour_lines = f.readlines()


colour_list = []
for g in colour_lines:
    colour = re.search(re_colour, g)
    if colour:
        colour_list.append([colour.group(1), colour.group(2)])

colours_html = "\n".join([
    '<div class="col-xs-2 colour-preview" '
    f'style="background-color: {colour}">'
    f'<span class="text">{name}</span></div>'
    for name, colour in colour_list
])

with open("./colours/index.html", "w") as f:
    f.write(template_html(
        f'<div class="flex-grid">{colours_html}</div>'
    ))
