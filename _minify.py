import os
from csscompressor import compress

counter = 0
targetfiles = []


for file in os.listdir("css"):
    if file.endswith("modesta.css"):
        name = file[:-4]
    elif file.endswith(".min.css"):
        name = file[:-8]
    else:
        continue

    with open("css/" + file) as content_file:
        content = content_file.read()

    target = os.path.join("css/", name + ".min.css")
    render = open(target, "w")
    render.write(compress(content))
    render.close()
    counter = counter + 1
    targetfiles.append("- " + file)

allfiles = '\n'.join(targetfiles)
print("Compressed {} files:\n{}".format(counter, allfiles))
