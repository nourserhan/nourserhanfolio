/* ============================================================
   CONTENT — imported from noorserhan.com (crawled 5 Oct 2026)
   Media: plain string = Wix media file on static.wixstatic.com
          {v:id, poster:file, cap} = Wix video (video.wixstatic.com)
          {src:'a/…'} = local file (eazli)
   Section layouts: full | two | three | four | stack
   ============================================================ */
const CATS = {
  artdir: 'Art Direction & Branding',
  product: 'Products Innovation',
  visual: 'Visual Communication'
};
const m = (f, cap) => ({ w: f, cap });
const vid = (id, poster, cap, q) => ({ v: id, poster, cap, q });

const PROJECTS = [
/* ---------------- BRANDING & IDENTITY ---------------- */
{ slug:'brassica', title:'Brassica Brasserie', cat:'artdir', label:'Original identity', engagement:'Freelance',
  where:'Saïfi Village, Downtown Beirut', role:'Branding · Art direction · Social media',
  intro:'A French-fusion bistro in Downtown Beirut. Beauty in simplicity.',
  cover:'7eff15_d1cb5fcf00f840a2bece246a509b8197~mv2_d_4032_2077_s_2.jpg',
  sections:[
    { h:'Main visual', t:'Brassica’s cover, used as the restaurant’s main visual, is inspired by Edward Hopper’s “Nighthawks”.', layout:'two',
      m:[m('7eff15_d1cb5fcf00f840a2bece246a509b8197~mv2_d_4032_2077_s_2.jpg','Brassica front'), m('7eff15_d3d6cfd51bc940aaa6e223e1b8edd2a1~mv2.jpg','Edward Hopper, “Nighthawks” (reference)')] },
    { h:'Logo & menu', layout:'full', m:[m('7eff15_36bf81d992cc4f41998ae10f1db6495d~mv2.jpg','Logo design and food menu sample')] },
    { h:'Coasters & uniforms', layout:'three', m:[m('7eff15_d4ea0a0168ef4f79a65a6a88ed077353~mv2_d_4500_3000_s_4_2.jpg','Coasters'), m('7eff15_40a623acc41749769e265851b2bd1923~mv2.jpg','Waiters’ uniforms'), m('7eff15_0ac344e98dd64964a5b2c7d22c46ff02~mv2.jpg','Bartenders’ uniforms')] },
    { h:'Restroom signage', t:'“Game of Thrones”: women/men signage drawn from the logo, a wall of toilet facts, and “There are two kinds of people in the toilet”.', layout:'three',
      m:[m('7eff15_37172254fd14416886dbd5cd32c6bf7f~mv2_d_4960_2815_s_4_2.jpg','Women/men signage inspired by the logo'), m('7eff15_f4f88bf6ef8041548a27a305d7b49960~mv2_d_2641_2614_s_4_2.jpg','Some interesting toilet facts…'), m('7eff15_c66f5a42d2d840e2abae71ec487c385b~mv2_d_3508_2480_s_4_2.jpg','There are two kinds of people in the toilet')] },
    { h:'Social media', layout:'two', m:[m('7eff15_70c96bf40e664a03988d333f7b3c43d5~mv2.png','“It’s not another campaign”'), m('7eff15_93954b875e324cbda1c0d0503bbbafff~mv2.png','“Pun intended”')] },
    { h:'Christmas carousel', layout:'full', m:[m('7eff15_a9a9fb9720ec4e2cb72d9ad17f52185a~mv2.png','Christmas carousel')] },
    { h:'Holidays & occasions', layout:'three', m:[m('7eff15_89e1f893b85b4ea1a7b1b864237453fd~mv2.png','Easter'), m('7eff15_811301b51a2c4f4283727c15a5e27b8a~mv2.png','Mother’s Day'), m('7eff15_d7011f76e31043849ee7ffacb33f5b67~mv2.png','Valentine’s')] },
    { h:'Social media grid', layout:'three', m:[m('7eff15_b3ad5a2d431b4bd2b29f9b55eb894157~mv2.png'), m('7eff15_a22bb9b576e3474390e8f64cbe085349~mv2.png'), m('7eff15_b28b9da8accd4574a19c11bfa95ca66f~mv2.png')] }
  ]},
{ slug:'sunsoul', title:'SunSoul Seafood Restaurant', cat:'artdir', label:'Original identity', engagement:'Freelance',
  where:'Coral Beach, Beirut', role:'Branding · Art direction · Social media',
  intro:'Sunsoul means “beach deck” in Arabic. The S is the Arabic letter س, drawn as a wave.',
  cover:'7eff15_751c6c18735541c78ff3e3af56fad3b2~mv2.png',
  sections:[
    { h:'The mark', layout:'two', m:[m('7eff15_751c6c18735541c78ff3e3af56fad3b2~mv2.png','Signage, blue'), m('7eff15_c98b487bc85c470282804c625f1836a7~mv2.jpg','Signage, white')] },
    { h:'Logo & menu', t:'Beauty in simplicity.', layout:'two', m:[m('7eff15_71383fa3236c4f7dbc747ed2aff444c3~mv2.png','Menu cover'), m('7eff15_d993f5d7d7564b618b65e145272926e0~mv2.png','Food menu sample')] },
    { h:'Uniforms & coasters', layout:'two', m:[m('7eff15_921401e6940645bfbc1620a814880b84~mv2.png','Waiters’ uniforms'), m('7eff15_a9365d13eb774fa5bea489b3cde1158d~mv2.png','Branded coasters')] },
    { h:'Social media', layout:'full', m:[m('7eff15_861febb3872e4fb4965d6638673cdf6f~mv2.png','Social media posts')] }
  ]},
{ slug:'champs-fitness', title:'Champs Fitness Complex', cat:'artdir', label:'Identity & environment', engagement:'Freelance',
  where:'Lebanon', role:'Branding · Art direction · Design · Social media',
  intro:'Branding, space design and social media for a sports complex.',
  cover:'7eff15_03eb561bce1547568f30a15a72dbdbe6~mv2_d_3400_2267_s_2.jpg',
  credits:[['Wall illustration','Tracy Chahwan']],
  sections:[
    { h:'Brand in the building', t:'Creative elevator branding, a main entrance in concrete and moss panels, door handles made of weight bars, branded stairs and a 10 × 4 m canvas at the basketball courts.', layout:'two',
      m:[m('7eff15_03eb561bce1547568f30a15a72dbdbe6~mv2_d_3400_2267_s_2.jpg'), m('7eff15_925a1738e9ff4c81aab3518519746a1b~mv2_d_3400_2625_s_4_2.jpg','Creative elevator branding: abs workout of Fadi el Khatib'), m('7eff15_f8e8bdd4ed1642c4b802259c58d0e959~mv2_d_3400_2267_s_2.jpg','Main entrance in concrete and moss panels'), m('7eff15_a9a6ac9b61004e81b4934c9f0beae93b~mv2_d_3400_2267_s_2.jpg','Creative door handles: weight bars')] },
    { h:'Wall branding', sub:'In collaboration with illustrator Tracy Chahwan', layout:'two',
      m:[m('7eff15_c8b51c51198140afa169274000d151e3~mv2_d_1294_1335_s_2.jpg','Wall branding design')] },
    { h:'Stairs & courts', layout:'full', m:[m('7eff15_e6775a24ba2140da9291142fbd256ded~mv2.jpeg','Creative stairs branding / 10 × 4 m canvas at the basketball courts')] },
    { h:'Social media', t:'Opening campaign: Champs is about living the moment. Easter posts, and a teaser for Fadi el Khatib’s restaurant “Tigers”.', layout:'two',
      m:[m('7eff15_706658c83d174286aa9a32d7158f68af~mv2.png','Opening campaign'), m('7eff15_7dd7ff9309d6411eaf54acc847bbe972~mv2.png','Easter posts')] }
  ]},
{ slug:'champs-office', title:'Champs Office Design', cat:'artdir', label:'Office design', engagement:'Freelance',
  client:'Fadi el Khatib', where:'Lebanon', role:'Branding · Interior design · Art direction',
  intro:'An office for Lebanon’s most prominent basketball player, built around his competition days.',
  cover:'7eff15_970443f6dff74a39bda7b5e86b951868~mv2_d_3400_2267_s_2.jpg',
  credits:[['Cracked-wall effect','Said Mahmoud, graffiti artist'],['Illustration','Krystel Saneh']],
  sections:[
    { h:'The office', t:'Framed national-team jerseys, his favourite quotes in vinyl on plexiglass, a modern basketball hoop in the middle and his mural drawing.', layout:'full',
      m:[m('7eff15_970443f6dff74a39bda7b5e86b951868~mv2_d_3400_2267_s_2.jpg')] },
    { h:'Wall of fame & timeline', layout:'two', m:[m('7eff15_bfa3b92986a04c7f911717176ac0f2e8~mv2_d_3400_2267_s_2.jpg','Wall of fame displaying all his trophies'), m('7eff15_64e4b28e776b49cfaaef4d4df0bf17a1~mv2_d_3400_2267_s_2.jpg','Timeline of his championships through the years')] }
  ]},
{ slug:'petit-cafe', title:'Petit Café', cat:'artdir', label:'Rebrand', engagement:'Freelance',
  where:'Lebanon', role:'Rebranding · Art direction · Social media · Food photography · TVC',
  intro:'A well-established café restaurant in Lebanon, rebranded for its 20th anniversary.',
  cover:'7eff15_0abb8a2dfa2f4ecfbe575773dbee570d~mv2_d_7360_4140_s_4_2.jpg',
  credits:[['Art direction','Nour Serhan'],['Food photography & video','Yves Lahoud']],
  sections:[
    { h:'Anniversary', layout:'two', m:[m('7eff15_0abb8a2dfa2f4ecfbe575773dbee570d~mv2_d_7360_4140_s_4_2.jpg'), m('7eff15_9dfad29d8dc6467a9d30c719ffcf9e5f~mv2_d_3868_5618_s_4_2.jpg')] },
    { h:'Food photography', sub:'Photography: Yves Lahoud · Art direction: Nour Serhan', layout:'two',
      m:[m('7eff15_1d83f3d4874f4e4dab98f25e54612056~mv2_d_4722_2656_s_4_2.jpg'), m('7eff15_cc1a979098144b4a8b80c9acc7087b7c~mv2.jpg'), m('7eff15_cf3685e72851452095683abdcc9c32ff~mv2.png'), m('7eff15_dbd3c4096fa74151a7f5bd501a8f413a~mv2.png'), m('7eff15_e42543253a4b4f5bafc8ace36182106f~mv2.png')] },
    { h:'Menu, placemats, uniforms', layout:'two',
      m:[m('7eff15_f1b74386761448c5a88973115cac2da1~mv2_d_2360_1556_s_2.jpeg','Menu uplift'), m('7eff15_ca0b27f7201a45c6a8b75ff53be59df2~mv2_d_2364_1552_s_2.jpeg','Placemats redesigned'), m('7eff15_6c5239d331eb42bbb30a9caaff11abce~mv2_d_2362_1554_s_2.jpeg','Placemats redesigned'), m('7eff15_83f0eb1d75414d47b6002c51e1be20c9~mv2.jpeg','New modern uniforms')] }
  ]},
{ slug:'beirut-by-route', title:'Beirut By Route', cat:'artdir', label:'Freelance project',
  client:'Beirut Municipality', role:'Art direction · Branding · Product design · 3 TVCs · App design',
  intro:'Beirut has no official addresses. A concept to redesign the city’s signage, number its buildings and launch “Beirut By Route”.',
  cover:'7eff15_9ba9124f389e44e28e5327a31db3d377~mv2_d_2696_2095_s_2.jpg',
  sections:[
    { h:'Beirut By Route', layout:'two', m:[m('7eff15_9ba9124f389e44e28e5327a31db3d377~mv2_d_2696_2095_s_2.jpg'), m('7eff15_a851e6439190454d8f20f7da88f08cd2~mv2_d_3400_2267_s_2.jpg'), m('7eff15_f969fe8b99eb48fd8512627996640cb8~mv2_d_3400_2860_s_4_2.jpg'), m('7eff15_0130508123e14893ba25f21ef3c0ba41~mv2_d_3400_1235_s_2.jpg')] },
    { h:'Teaser & revealer', t:'Giant hot-air balloons floating over the districts. A teaser with addresses given “Lebanese style”, then the reveal by the Municipality of Beirut.', layout:'two',
      m:[m('7eff15_9d9a785b3f864fb1a4bed43568d7d176~mv2_d_3400_2267_s_2.jpg','Teaser campaign: addresses given “Lebanese style”'), m('7eff15_10a0236bd12f4882a3e0f9214f55380a~mv2_d_3400_2267_s_2.jpg','Revealer campaign: Municipality of Beirut')] },
    { h:'Signage system', layout:'three', m:[m('7eff15_dd53929d5f404418944acf832c794de9~mv2_d_3400_2267_s_2.jpg','New signage design and the origin of the street name'), m('7eff15_594ef11dbaba4b1f904a1fd2c654b4b4~mv2_d_3400_2267_s_2.jpg','Information booth'), m('7eff15_0de123df295b4e9886ec0a9302b6cefd~mv2_d_2068_1380_s_2.jpg','Bus shelter and district map')] },
    { h:'TVCs', t:'Three TVCs, “Roads”, “Loto” and “Delivery”, plus a making-of film. The three TVCs were voted 2nd best commercial in Lebanon.', layout:'none', m:[] },
    { h:'Mobile app', t:'Helps people navigate and stay informed about events in their district.', layout:'two',
      m:[m('7eff15_56e9f5f1acf74670b385b932b0f7556c~mv2.png','Mobile app'), m('7eff15_46ac859c75d94f86bef57e46968674ea~mv2_d_3250_2009_s_2.jpg','Mobile app')] }
  ]},

/* ---------------- CAMPAIGNS ---------------- */
{ slug:'philips', title:'Philips', cat:'artdir', label:'Agency campaigns', agency:'TBWA\\RAAD', role:'Art direction · Film · Digital',
  intro:'Two campaigns: Philips Bodygroom and Philips One toothbrush.',
  cover:'7eff15_80def3a01ff94140acb9ea73d02c11da~mv2.png',
  sections:[
    { h:'Philips Bodygroom', sub:'TBWA\\RAAD · Art direction, film, digital · Film shot in Dubai', t:'“No one knows men like Philips does.” Groommate is a Tinder-inspired lens: swipe or nod left and right on questions and pictures, and get matched with the right Bodygroom.', layout:'two',
      m:[m('7eff15_80def3a01ff94140acb9ea73d02c11da~mv2.png'), m('7eff15_0be4470292b14d06ac8798d2b84536e9~mv2.png','Key visuals'), m('7eff15_e7e55ed77820404a97d574a9c881302e~mv2.png','Groommate lens'), m('7eff15_257926905db94110aa85272cc6976698~mv2.png')] },
    { h:'Philips One toothbrush', sub:'TBWA\\RAAD · Art direction, film, digital', t:'Made to give Gen Z a voice. “Choose your ad”: an interactive film where the toothbrush colour you pick decides the next scene.', layout:'four',
      m:[m('7eff15_ce3b8704ff6f4a238d46e24634046506~mv2.jpg','Mupi'), m('7eff15_14124b73679a4ea3bb1428fcb1ebd7de~mv2.jpg','In-store stand'), m('7eff15_6826f298131d4f19b84672c6ee00f9bd~mv2.jpg','Stand side panel'), m('7eff15_b24c997760e142968ff8f80b58586b4b~mv2.jpg','Free-standing unit')] },
    { h:'“Choose your ad” film map', layout:'full',
      m:[m('7eff15_4d58286b914b4f27befdb17382df83db~mv2.jpg'), m('7eff15_9b52f80857174766ab388d86ad51a9b3~mv2.jpg'), m('7eff15_72e4bb7c882547339294d451efc02f03~mv2.png')] }
  ]},
{ slug:'pizza-hut', title:'Pizza Hut Super Limo × Nutella', cat:'artdir', label:'Agency campaign', agency:'Wondereight', role:'Art direction · Film · Digital',
  intro:'“Let’s face it, we’re not strong enough.” One metre of pizza, and a Nutella finish.',
  cover:'7eff15_0eb045f2ebc14da09f71c929df0c2b1d~mv2.png',
  sections:[
    { h:'Key visual adaptations', layout:'two', m:[m('7eff15_0eb045f2ebc14da09f71c929df0c2b1d~mv2.png','Outdoor, bilingual'), m('7eff15_cfa87612d4a0422aabf65030b38cdf27~mv2.png','Hoarding, bilingual'), m('7eff15_76f4b7043fde4ec090bf543f047f3c3f~mv2.png','Mupis, bilingual'), m('7eff15_7828cbb9d5654773a098dbf85da7597e~mv2.png','Lampposts, bilingual')] },
    { h:'Social media: bilingual stories', layout:'three', m:[m('7eff15_0866c5be72064530964d9fd591f62cbc~mv2.png','Social, bilingual'), vid('751325d8af094e82b823e24aa7e675d6','7eff15_751325d8af094e82b823e24aa7e675d6f000.jpg','Bilingual story'), vid('55c86dddbc824623b6e5f129ab5a9db9','7eff15_55c86dddbc824623b6e5f129ab5a9db9f000.jpg','Bilingual story')] },
    { h:'Social media: bilingual reels', sub:'“Friends”, shot in Dubai', layout:'four', m:[vid('ac0b15a9ee0446fdab5ac262967e025b','7eff15_ac0b15a9ee0446fdab5ac262967e025bf000.jpg','Reel: Friends'), vid('c4fdcadc015d42fbb2bcafa2907990d2','7eff15_c4fdcadc015d42fbb2bcafa2907990d2f000.jpg','Reel: Friends')] }
  ]},
{ slug:'mcvities', title:'McVitie’s New Look', cat:'artdir', label:'Agency campaign', agency:'TBWA\\RAAD', role:'Branding · Art direction · Film · In-store · Digital',
  intro:'“For so long, McVitie’s has been known for its prominent red. How can we own blue, yellow and brown?”',
  cover:'7eff15_f9903afd76c341d392e3a1b822a8fb18~mv2.png',
  sections:[
    { h:'Internet biscuits', t:'We’ve all heard of internet cookies. McVitie’s launched the first internet biscuits with its new pack: collect enough and a real pack of Digestives is added to your cart.', layout:'full', m:[m('7eff15_f9903afd76c341d392e3a1b822a8fb18~mv2.png')] },
    { h:'In-store & film', t:'In-store free-standing unit, and a film shot in Egypt in which two Egyptian artists write a song together, each bite of McVitie’s adding a new instrument.', layout:'two',
      m:[m('7eff15_539640f465444de7aaae3581634b1b7d~mv2.png','In-store free-standing unit'), m('7eff15_34c5858c82c2449fb308dbe91a1becaf~mv2.png')] }
  ]},
{ slug:'daikin', title:'Daikin Air Purifier', cat:'artdir', label:'Agency campaigns', agency:'TBWA\\RAAD', role:'Art direction · Film · Digital · On-ground activation',
  intro:'Two campaigns: Breathe Health and The Art of Air.',
  cover:'7eff15_530f5ddf628f40e6a707c38d665138b8~mv2.png',
  sections:[
    { h:'Breathe Health', sub:'TBWA\\RAAD · Art direction, film, digital, on-ground activation', t:'“We all breathe the same, but not all of us breathe quality air. Daikin Air Purifier, Breathe Health.”', layout:'two',
      m:[m('7eff15_530f5ddf628f40e6a707c38d665138b8~mv2.png'), m('7eff15_7c29b22c0b6c47b19a04f4b7d51eabc3~mv2.png'), m('7eff15_2b400f9f54d64e2681d7f9bfc15a2c0d~mv2.png','Gym'), m('7eff15_f6f858706adb4aa989ebfff67f4ee77b~mv2.png')] },
    { h:'Hilton: the purest rooms ever', t:'A collaboration with Hilton hotels.', layout:'two',
      m:[m('7eff15_a5d60a71aefd4848ab82ed2ed47214b2~mv2.png','Hilton × Daikin'), m('7eff15_be7d0e5a998f49f6b8fab8cfd1dcf7bb~mv2.png')] },
    { h:'The Art of Air', sub:'TBWA\\RAAD · Art direction, photoshoot & film', t:'We overlook air. This campaign listens to what it has to say, for once.', layout:'two',
      m:[m('7eff15_fed68bf19f114ed0b7f02d54778e9497~mv2.png'), m('7eff15_3c0ad5c796244a039d8038d2ff650b54~mv2.png'), vid('0f938a5e0a684f0caa50a8f7d92d8508','7eff15_0f938a5e0a684f0caa50a8f7d92d8508f000.jpg','Film', ['720p','480p'])] }
  ]},
{ slug:'general-mills', title:'General Mills', cat:'artdir', label:'Agency campaigns', agency:'VMLY&R UAE', role:'Art direction · Social media',
  intro:'Nature Valley and Häagen-Dazs.',
  cover:'7eff15_db52f0989e66464f98e7281710bfa75e~mv2.png',
  sections:[
    { h:'Nature Valley', sub:'General Mills · VMLY&R UAE · Art direction', t:'Key visuals for the plain biscuit launch: make a “boring” snack fun, and show it’s made from natural ingredients.', layout:'three',
      m:[m('7eff15_8cb582e079df43cc9553b81db9abac1b~mv2.png'), m('7eff15_7099b71e231f4fcaa4f027b1b23d7b66~mv2.png'), m('7eff15_7acd6ad044184f9cb43dc2a78eb9a859~mv2.png')] },
    { h:'Häagen-Dazs: Fly to the Flavors', sub:'General Mills · VMLY&R UAE · Art direction, social media', t:'Buy one of five flavours, win a trip to its origin: Belgium, Paris, Mumbai, Madagascar, Poland.', layout:'full',
      m:[m('7eff15_3027d4f534f54c3c86243fe1a29b0291~mv2.png','Fly to the Flavors')] },
    { h:'In-store & posters', layout:'four',
      m:[m('7eff15_cdc45ef2fe8e4f0ca39ef288e1df16db~mv2.png','Poster'), m('7eff15_2a15c63e99194380909685c104c5dbec~mv2.png','Fridge'), m('7eff15_367f31374a9a45738f3855e9c4534da2~mv2.png','Fridge'), m('7eff15_c3e946a83798442e9defdf8cf7e9e10b~mv2.png','Screens'), m('7eff15_59242ed209534229aa62cc8c526f308e~mv2.png','Tent card'), m('7eff15_4ac15471d0ea4f11a716c6ae0f3d98c3~mv2.png','Banner'), m('7eff15_8e733bacbab44f09b381e8c769721898~mv2.png','Dangler')] },
    { h:'Social', layout:'full', m:[m('7eff15_3e1c66496d1c4378a8485b2403786ea5~mv2.png','Häagen-Dazs social posts')] }
  ]},
{ slug:'formula-1', title:'Formula 1 ADGP', cat:'artdir', label:'Agency campaign', agency:'Leo Burnett UAE', role:'Branding · Art direction · Social media',
  intro:'Abu Dhabi Grand Prix celebrating 10 years of hosting Formula 1.',
  cover:'7eff15_52f0246208af498c935da3de01159f84~mv2_d_2574_1716_s_2.png',
  sections:[
    { h:'10 years', layout:'two', m:[m('7eff15_52f0246208af498c935da3de01159f84~mv2_d_2574_1716_s_2.png'), m('7eff15_6d0befb3ce2d424ca716b62edfe0cd85~mv2_d_2572_1714_s_2.png','Round-neck T-shirt designs')] },
    { h:'Name tags', layout:'two', m:[m('7eff15_aff077c2d9cd43488575a4ef93a9c27b~mv2_d_3048_1702_s_2.png','Name tags'), m('7eff15_481caac836d7448aa9e09548c005a4b4~mv2_d_3054_1712_s_2.png','Name tags')] },
    { h:'10-year edition book', t:'Front and back lenticular cover, and an inside 3D page.', layout:'full',
      m:[m('7eff15_409d4b7429dd46a39de4794903da9d93~mv2_d_6000_2963_s_4_2.jpg','Lenticular cover'), m('7eff15_b365fe4f6dbb4fbf811fd438d55f22ab~mv2_d_6000_2963_s_4_2.jpg','Lenticular cover'), m('7eff15_446ef2cf4e304f4995b6b594796eb9f6~mv2_d_6000_2963_s_4_2.jpg','Inside 3D page')] }
  ]},
{ slug:'la-vache-qui-rit', title:'La Vache Qui Rit Organic', cat:'artdir', label:'Agency campaign', agency:'Havas UAE', role:'Branding · Art direction · Social media',
  intro:'“Laugh Naturally.” A new organic product, all about laughter and family moments.',
  cover:'7eff15_d2f7953611c343e69357e070c1233236~mv2_d_6000_4000_s_4_2.jpeg',
  sections:[
    { h:'Laugh Naturally', layout:'full', m:[m('7eff15_d2f7953611c343e69357e070c1233236~mv2_d_6000_4000_s_4_2.jpeg')] },
    { h:'In store', layout:'three', m:[m('7eff15_17489fb0ccce45f6b78202baeae9bd51~mv2.jpg','Organic in-store sampling area'), m('7eff15_e98fe26e38cd4007bf78fd02b051fb33~mv2.jpg','Humorous in-store posters'), m('7eff15_d9af16e0c5224743928ddaf5ee8573e7~mv2.jpg','Humorous in-store posters')] },
    { h:'Social media', layout:'full', m:[m('7eff15_e064c40b6c2f4297a1cee7f3fde7cb32~mv2.png','Social media posts')] }
  ]},

/* ---------------- PRODUCT INNOVATION ---------------- */
{ slug:'kelloggs', title:'Kellogg’s Packaging', cat:'product', label:'Concept design', engagement:'Freelance project', role:'Branding · Packaging · Art direction',
  intro:'Fruit and cereal in separate compartments, so the fruit stops ending up at the bottom.',
  cover:'7eff15_1e6d3c5133d1476ea2c704fb05f71c0e~mv2_d_5000_3334_s_4_2.jpg',
  sections:[
    { h:'The pack', t:'A thinner, more gracious logo, a body silhouette on the box and a calorie scale by serving size on the back.', layout:'three',
      m:[m('7eff15_5059940e521b422792f5147e0810ba36~mv2.jpg','Box'), m('7eff15_1e6d3c5133d1476ea2c704fb05f71c0e~mv2_d_5000_3334_s_4_2.jpg','Die cuts'), m('7eff15_c7e71228dcae4d22b826a9c7bfbfd4df~mv2_d_5000_5189_s_4_2.jpg','Die cuts')] }
  ]},
{ slug:'fifteen', title:'15 Fragrances', cat:'product', label:'Product design', engagement:'Freelance',
  client:'Fattal Group, sponsored by Fadi el Khatib', role:'Product design · Branding · Packaging · Art direction',
  intro:'Three sports fragrances and shower gels for supermarkets, pharmacies and gyms. His name, his game and his fame.',
  cover:'7eff15_c72d6dd021c741f5920494986fd44786~mv2_d_1969_1459_s_2.jpeg',
  sections:[
    { h:'The range', layout:'two', m:[m('7eff15_c72d6dd021c741f5920494986fd44786~mv2_d_1969_1459_s_2.jpeg'), m('7eff15_e8f689e807c84509b03c1761539d6ac5~mv2_d_1969_1459_s_2.jpg'), m('7eff15_0dd888bfbe89449e8855c142352b06af~mv2_d_1969_1459_s_2.jpeg'), m('7eff15_25a782b812354cafb644ebae484025e8~mv2.jpg','Stand')] }
  ]},
{ slug:'futura', title:'Futura', cat:'product', label:'Product design', client:'Beiteddine Festival 2014', role:'Product design · Art direction',
  intro:'Given an entire scene at the Beiteddine Festival 2014.',
  cover:'7eff15_5c7b049bf7794277ba925492e252e966~mv2.jpg',
  sections:[
    { h:'Futura', t:'Inspired by Maria’s transformation in Metropolis and the Tripods of War of the Worlds. Circles overlap by hand, and a giant eye travels more than 4 metres towards the audience.', layout:'three',
      m:[m('7eff15_f2c75df8fb3f4b00b381a6edd86f2878~mv2.jpg','Overlapping circles: Maria’s transformation'), m('7eff15_db1b8d6581334ab397ce61dd4982b229~mv2.jpg'), m('7eff15_5bb10543e98f4fbc8daf5522de7576e5~mv2.jpg')] },
    { h:'On stage', layout:'full', m:[m('7eff15_5c7b049bf7794277ba925492e252e966~mv2.jpg')] }
  ]},

/* ---------------- VISUAL COMMUNICATION ---------------- */
{ slug:'visuals', title:'Visuals', cat:'visual', label:'Art direction & design', role:'Concepts · Art direction · Design',
  intro:'Posters and key visuals: freelance and agency work.',
  cover:'7eff15_24d6bf40afb04262a2fb2cd7b8d5ba19~mv2.png',
  artworks:true,
  sections:[
    { h:'Posters', layout:'four', m:[
      m('7eff15_4dcd38f8833944f29151110f01a0cc60~mv2.png','Read between the lines · Shortlisted, Dubai Lynx print award 2015'),
      m('7eff15_a9c9530d6ef6494a94faa1c3a35cd932~mv2.png','“The Trophy” movie poster · Freelance · Selected, Festival Cine de Bogotá'),
      m('7eff15_03a201633dd94ee290b1f80a5b1941a4~mv2.png','Herta · Freelance'),
      m('7eff15_aa29f5c097fe43a1a18df8de014f6b7a~mv2.png','Banque Populaire: bank of the people · Freelance'),
      m('7eff15_074eb75c6aa042d1b28dfe87fa00f0db~mv2.png','Don’t drink and drive · Freelance'),
      m('7eff15_8678fd88f14e453585c4f7bcd8d98aae~mv2.png','The Lebanese Army, Are Me · Freelance'),
      m('7eff15_d085bb241fba435e9ffc2380f1392004~mv2.png','The Lebanese Army, Are Me · Arabic translation')] },
    { h:'Key visuals', layout:'two', m:[
      m('7eff15_98c502c0b6bb4f73afd9a105ed9c79f1~mv2.png','Nissan 5-year warranty · TBWA\\RAAD'),
      m('7eff15_4f250035fecb46499dd580353062b35b~mv2.png','Sunwhite tortilla · Havas UAE'),
      m('7eff15_24d6bf40afb04262a2fb2cd7b8d5ba19~mv2.png','Sunwhite tortilla · Havas UAE'),
      m('7eff15_5b9e241ac712430eab9d02d41d4e1bf1~mv2.png','Tiffany salad dressings · Havas UAE'),
      m('7eff15_5eed8f1ad84c44baa619561d9b020254~mv2.png','Tiffany salad dressings · Havas UAE'),
      m('7eff15_077dc82655144cc0a4872c6d61105ea6~mv2.png','Tiffany salad dressings · Havas UAE')] }
  ]},
{ slug:'illustrations', title:'Illustrations', cat:'visual', label:'Hand-drawn', role:'Ink · Pencil · Paint',
  intro:'“Artist until I find a real job.” All illustrations and paintings are hand drawn.',
  cover:'7eff15_975db00d64d5456c86a39d2b8f8692ba~mv2.png',
  artworks:true,
  sections:[
    { h:'Black ink', layout:'two', m:[m('7eff15_1bf148699c484884937852195819d8c5~mv2.jpg','Uptown Downtown'), m('7eff15_975db00d64d5456c86a39d2b8f8692ba~mv2.png','Inception'), m('7eff15_9627e54d4b494a0a95975539f39c7e21~mv2.jpg','Upside Down'), m('7eff15_5dbe6322627244ff90d778102e8217de~mv2.jpg','Distorted')] },
    { h:'Pencil', layout:'three', m:[m('7eff15_200fdc78d8f94180b5bbad53368843ce~mv2.jpg','Perspectives'), m('7eff15_40db663e9ca444328aba9c6f17d5a6d4~mv2.png','Skyscrapers'), m('7eff15_3cf1f9a935b246afb38400c1ee1bf24d~mv2.jpg','The Glasshouse')] },
    { h:'Paintings & studies', layout:'two', m:[m('7eff15_d8e5f9b223ec41a988ed8aa4dcbbb82c~mv2_d_2232_1720_s_2.jpg','After Fouad el Khoury’s photograph of the Ain el Mreisseh corniche, Beirut, during the civil war'), m('7eff15_278bf34687cd4bfc82192c0b305978ef~mv2_d_1722_1722_s_2.jpg','The Eiffel Tower, inspired by Salvador Dalí'), m('7eff15_1fa881501a454607bb46f50d4cfbb647~mv2_d_1784_1716_s_2.jpg','“La Bourgeoise”'), m('7eff15_6c472b1cb60f4e7db8e9e572f8c68222~mv2_d_5000_5000_s_4_2.jpg','“Le Romain”')] }
  ]}
];
const THINK_MILK_LOGO = '7eff15_6ddcb2c853124006afa18b4246d536ff~mv2.png';

const MENU = { philips:'Philips', 'pizza-hut':'Pizza Hut', mcvities:'McVitie’s', daikin:'Daikin Air Purifier', 'general-mills':'General Mills', 'formula-1':'Formula 1 ADGP', 'la-vache-qui-rit':'La Vache Qui Rit Organic', 'champs-office':'Champs Office Design', 'champs-fitness':'Champs Fitness Complex', brassica:'Brassica Brasserie', sunsoul:'SunSoul Seafood Restaurant', 'petit-cafe':'Petit Café', 'beirut-by-route':'Beirut By Route', kelloggs:'Kellogg’s Packaging', fifteen:'15 Fragrances', futura:'Futura', visuals:'Visuals', illustrations:'Illustrations' };
const ORDER = Object.keys(MENU);
PROJECTS.sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug));
