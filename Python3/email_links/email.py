#!/usr/local/bin/python3
""" This program replaces dummy links (http://xxxx/...) with live ones from
photobucket in link.txt; links.txt should have one link per line"""
## TODO
# Loops could be consolodated into a singular, more efficient, loop.

import fileinput

reps = []
pbs = []
new = {}
with open('links.txt') as f:
    for l in f:
        pbs.append(l.strip("\n"))


with open('index.html') as fi:
    for line in fi:
        if line[0:19] == '<div class="mi-all"':
            ln = line.split()
            for attr in ln:
                if 'http://xxxx/' in attr:
                    for link in pbs:
                        if attr[-51:-5] in link:
                            new[attr[-51:-5]] = link

for entry in new:
    for line in fileinput.input(['index.html'], inplace=True):
        print(line.replace(f'http://xxxx/images/{entry}.jpg',
            new[entry]), end='')
