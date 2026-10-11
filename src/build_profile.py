import os
d=os.path.dirname(os.path.abspath(__file__)); r=lambda f: open(os.path.join(d,f),encoding='utf8').read()
open(os.path.join(os.path.dirname(d),'profile.html'),'w',encoding='utf8').write(r('profile_shell.html').replace('/*DATA*/',r('data.js')).replace('/*PROFILE*/',r('profile.js')))
