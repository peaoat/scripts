import os
from PIL import Image


def compress(file):
    filepath = os.path.join(os.getcwd(), file)
    osize = os.stat(filepath).st_size
    pic = Image.open(filepath)
    pic.save("comp_" + file, "JPEG", optimize=True, quality=85)
    nsize = os.stat(os.path.join(os.getcwd(), "comp_" + file)).st_size
    per = (osize - nsize) / float(osize) * 100
    return per


pwd = os.getcwd()
total, num, count = 0, 0, 0
for fi in os.listdir(pwd):
    if os.path.splitext(fi)[1].lower() in ('.jpg', '.jpeg'):
        num += 1
        total += compress(fi)
print(f'Files compressed: {num}')
print(f'Average compression: {total/num}%')
