import os
import asyncio
import re

from csscompressor import compress
from watchgod import awatch

print("Minify watcher is now active")


async def main():
    async for changes in awatch('css'):
        change, fileloc = list(changes)[0]
        file = re.split(r"[\\/]", fileloc)[1]
        if file.endswith(".min.css"):
            continue

        if file.endswith(".css"):
            print("Detected changes")
            name = file[:-4]
            with open("css/" + file) as content_file:
                content = content_file.read()

            target = os.path.join("css/", name + ".min.css")
            render = open(target, "w")
            render.write(compress(content))
            render.close()
            print("Created or Modified {}.min.css".format(name))

loop = asyncio.get_event_loop()
loop.run_until_complete(main())
