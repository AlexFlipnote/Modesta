import sys
import os
import time

from subprocess import Popen
from csscompressor import compress


def minify():
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
            print("Created {}.min.css".format(file))


def cpu_count():
    """ Returns the number of CPUs in the system """
    num = 1
    if sys.platform == 'win32':
        try:
            num = int(os.environ['NUMBER_OF_PROCESSORS'])
        except (ValueError, KeyError):
            pass
    elif sys.platform == 'darwin':
        try:
            num = int(os.popen('sysctl -n hw.ncpu').read())
        except ValueError:
            pass
    else:
        try:
            num = os.sysconf('SC_NPROCESSORS_ONLN')
        except (ValueError, OSError, AttributeError):
            pass

    return num


def exec_commands(cmds):
    """ Exec commands in parallel in multiple process (as much as we have CPU) """
    if not cmds:
        return  # empty list

    def done(p):
        return p.poll() is not None

    def success(p):
        return p.returncode == 0

    def fail():
        sys.exit(1)

    max_task = cpu_count()
    processes = []
    while True:
        while cmds and len(processes) < max_task:
            task = cmds.pop()
            print(task)
            processes.append(Popen(task, shell=True))

        for p in processes:
            if done(p):
                if success(p):
                    processes.remove(p)
                else:
                    fail()

        if not processes and not cmds:
            break
        else:
            time.sleep(0.05)


commands = [
    ['sass', '--watch', 'scss:css', '--style', 'expanded'],
    ['bundle', 'exec', 'jekyll', 'serve']
]

exec_commands(commands)
