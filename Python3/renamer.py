#!/usr/local/bin/python3

# Make sure to run this file in the directory with all of your
# images named xyz_mini.jpg

# future(?): use an re to match the part of the file to replace
#   currently functional for its first use case.

import os

path, lst = os.getcwd(), os.listdir()

for image in lst:
    if image[-9:].lower() == '_mini.jpg':
        os.rename(f'{path}/{image}', f'{path}/{image[:-9]}.jpg')
