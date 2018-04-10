import os
from csscompressor import compress

for file in os.listdir("css"):
    if file.endswith(".min.css"):
        continue

    if file.endswith(".css"):
        name = file[:-4]
        with open("css/" + file) as content_file:
            content = content_file.read()

        target = os.path.join("css/", name + ".min.css")
        render = open(target, "w")
        render.write(compress(content))
        render.close()
