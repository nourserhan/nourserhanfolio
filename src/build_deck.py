import os,re,base64,json,sys
d=os.path.dirname(os.path.abspath(__file__)); r=lambda f: open(os.path.join(d,f),encoding='utf8').read()
root=d if os.path.isdir(os.path.join(d,'a')) else os.path.dirname(d)
out=sys.argv[1] if len(sys.argv)>1 else os.path.join(root,'index.html')
app=r('deck.js'); data=r('data.js')
def b64(p,mime): return f"data:{mime};base64,"+base64.b64encode(open(os.path.join(root,p),'rb').read()).decode()
fonts=''
for fam,f,w,st in [('Adventor','a/fonts/adventor-regular.woff','400','normal'),('Adventor','a/fonts/adventor-bold.woff','700','normal'),('Lora','a/fonts/lora.woff','400 700','normal')]:
    fonts+=f'@font-face{{font-family:"{fam}";src:url({b64(f,"font/woff")}) format("woff");font-weight:{w};font-style:{st};font-display:swap}}\n'
paths=sorted(set(re.findall(r"E\('([^']+)'",app)))
assets={'a/'+p: b64('a/'+p,'image/jpeg' if p.endswith('.jpg') else 'image/png') for p in paths}
html=r('deck_shell.html').replace('/*FONTS*/',fonts).replace('/*ASSETS*/','window.ASSETS='+json.dumps(assets)+';').replace('/*DATA*/',data).replace('/*APP*/',app)
open(out,'w',encoding='utf8').write(html); print(out, round(len(html)/1e6,2),'MB', len(paths),'eazli images')
