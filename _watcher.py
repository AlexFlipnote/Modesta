import sys
import os
import time
import atexit

from subprocess import Popen

processes = []


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
    while True:
        while cmds and len(processes) < max_task:
            task = cmds.pop()
            print(f'Starting "{str(task[0]).split(" ")[0]}" process...')
            if sys.platform == 'linux':
                processes.append(Popen(task, shell=True))
            else:
                processes.append(Popen(str(task[0]).split(' '), shell=True))

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


def on_exit():
    for p in processes:
        print(f'Killing "{p.args[0]}" process...')
        p.kill()


commands = [
    ['sass --watch scss:css --style compressed'],
    ['bundle exec jekyll serve'],
    ['rollup -c -w']
]

atexit.register(on_exit)
try:
    exec_commands(commands)
except KeyboardInterrupt:
    pass
