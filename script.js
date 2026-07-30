:root{
  --bg: #241811;
  --bg-alt: #1a1109;
  --cream: #F6F0E6;
  --cream-dim: #cfc3b2;
  --line: rgba(246,240,230,0.14);
  --metal-1: #ffffff;
  --metal-2: #cfe0f2;
  --metal-3: #8fa9c9;
  --gold: #cba36b;
  --radius: 22px;
  --maxw: 1180px;
  --serif: "Cormorant Garamond", serif;
  --sans: "Manrope", sans-serif;
}

*{ box-sizing:border-box; }
html{ scroll-behavior:smooth; }

body{
  margin:0;
  background:var(--bg);
  color:var(--cream);
  font-family:var(--sans);
  font-size:16px;
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
}

img{ max-width:100%; display:block; }
a{ color:inherit; }

.wrap{
  max-width:var(--maxw);
  margin:0 auto;
  padding:0 clamp(20px,5vw,64px);
}

/* subtle grain overlay for texture */
.grain{
  position:fixed; inset:0; pointer-events:none; z-index:2;
  opacity:.05; mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ---------- Nav ---------- */
.nav{
  position:fixed; top:0; left:0; right:0; z-index:40;
  display:flex; align-items:center; justify-content:space-between;
  padding:18px clamp(20px,5vw,64px);
  backdrop-filter:blur(10px);
  background:linear-gradient(to bottom, rgba(20,13,9,0.75), rgba(20,13,9,0));
  transition:background .3s ease;
}
.nav.is-scrolled{ background:rgba(20,13,9,0.86); border-bottom:1px solid var(--line); }
.nav__brand{
  font-family:var(--serif); font-style:italic; font-weight:600; font-size:22px;
  letter-spacing:.05em; text-decoration:none; color:var(--cream);
}
.nav__links{ display:flex; align-items:center; gap:30px; }
.nav__links a{
  text-decoration:none; color:var(--cream-dim); font-size:14.5px; font-weight:500;
  letter-spacing:.02em; transition:color .2s ease;
}
.nav__links a:hover{ color:var(--cream); }
.nav__cta{
  border:1px solid var(--line); padding:8px 18px; border-radius:999px; color:var(--cream) !important;
}
.nav__cta:hover{ border-color:var(--gold); }
.nav__toggle{
  display:none; flex-direction:column; gap:5px; background:none; border:0; cursor:pointer; padding:8px;
}
.nav__toggle span{ width:22px; height:2px; background:var(--cream); display:block; }

/* ---------- Hero ---------- */
.hero{
  position:relative; min-height:100svh; display:flex; align-items:flex-end;
  overflow:hidden;
}
.hero__bg{
  position:absolute; inset:0; background-size:cover; background-position:50% 25%;
  filter:saturate(.75) contrast(1.05) blur(1.5px);
  transform:scale(1.08);
}
.hero__scrim{
  position:absolute; inset:0;
  background:
    linear-gradient(180deg, rgba(26,17,9,.55) 0%, rgba(26,17,9,.35) 35%, rgba(26,17,9,.92) 92%),
    linear-gradient(90deg, rgba(20,13,9,.55) 0%, rgba(20,13,9,.05) 55%);
}
.hero__content{
  position:relative; z-index:2; padding:0 clamp(20px,6vw,80px) clamp(48px,8vw,96px);
  max-width:900px;
}
.eyebrow{
  text-transform:uppercase; letter-spacing:.22em; font-size:12.5px; color:var(--gold);
  font-weight:700; margin:0 0 14px;
}
.hero__title{
  font-family:var(--serif); font-style:italic; font-weight:600;
  font-size:clamp(64px, 13vw, 168px); line-height:.88; margin:0;
  background:linear-gradient(120deg, var(--metal-1) 0%, var(--metal-2) 35%, var(--metal-3) 55%, #fff 70%, var(--metal-2) 100%);
  -webkit-background-clip:text; background-clip:text; color:transparent;
  text-shadow: 0 2px 40px rgba(180,200,230,0.25);
}
.hero__title-break{ display:block; margin-left:.6em; }
.hero__by{
  font-size:15px; color:var(--cream-dim); margin:18px 0 30px; letter-spacing:.02em;
}

.btn{
  display:inline-flex; align-items:center; gap:8px;
  padding:13px 26px; border-radius:999px; text-decoration:none;
  font-weight:600; font-size:14.5px; letter-spacing:.01em;
  background:var(--cream); color:var(--bg-alt);
  border:1px solid var(--cream); transition:transform .2s ease, opacity .2s ease;
}
.btn:hover{ transform:translateY(-2px); opacity:.92; }
.btn--ghost{ background:transparent; color:var(--cream); border:1px solid var(--line); }
.btn--ghost:hover{ border-color:var(--gold); color:var(--gold); }
.btn--outline{ background:transparent; color:var(--cream); border:1px solid rgba(246,240,230,.5); }
.btn-row{ display:flex; gap:12px; flex-wrap:wrap; margin-top:22px; }

/* ---------- Sections ---------- */
.section{ padding:clamp(70px,10vw,120px) 0; position:relative; }
.section--dark{ background:var(--bg-alt); }

.display{
  font-family:var(--serif); font-weight:600; font-style:italic;
  color:var(--cream); margin:0 0 20px;
}
.display--big{
  font-size:clamp(46px, 8vw, 96px); line-height:.95;
  margin-bottom:clamp(32px,5vw,56px);
}

.lead{ font-size:19px; color:var(--cream); }
p{ color:var(--cream-dim); }

/* About */
.about{ display:grid; grid-template-columns:.85fr 1fr; gap:clamp(28px,5vw,72px); align-items:center; }
.about__photo img{ border-radius:var(--radius); }
.about__text .display{ margin-top:2px; }

/* Education */
.grid-2{ display:grid; grid-template-columns:1fr 1fr; gap:24px; }
.card{
  background:rgba(246,240,230,.04); border:1px solid var(--line);
  border-radius:var(--radius); padding:32px;
}
.card h3{ font-family:var(--serif); font-style:italic; font-size:24px; margin:0 0 6px; color:var(--cream); }
.card__meta{ color:var(--gold); font-size:13.5px; text-transform:uppercase; letter-spacing:.06em; margin:0 0 14px; font-weight:600;}

/* Experience */
.grid-3{ display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.exp-card{
  padding:24px; border:1px solid var(--line); border-radius:var(--radius);
  background:rgba(246,240,230,.03); position:relative;
}
.exp-card__photo{
  border-radius:14px; overflow:hidden; margin-bottom:18px; aspect-ratio:1/1;
}
.exp-card__photo img{ width:100%; height:100%; object-fit:cover; }
.exp-card h3{ font-family:var(--serif); font-style:italic; font-size:21px; margin:0 0 8px; color:var(--cream); }
.card__role{ color:var(--cream); font-weight:600; font-size:14.5px; margin:0 0 4px; }

/* Skills / Goals ovals */
.skills-row{ display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
.oval{
  border:1px solid var(--line); border-radius:120px; padding:36px 30px;
  text-align:center; display:flex; flex-direction:column; justify-content:center; min-height:170px;
  background:radial-gradient(120% 120% at 50% 0%, rgba(203,163,107,.08), transparent 60%);
}
.oval__title{ font-weight:700; color:var(--cream); margin:0 0 8px; font-size:15.5px; }
.oval__text{ color:var(--cream-dim); font-size:14.5px; margin:0; }

/* Work */
.work-list{ display:flex; flex-direction:column; gap:clamp(48px,8vw,88px); }
.work-item{
  display:grid; grid-template-columns:.9fr 1.1fr; gap:clamp(24px,5vw,64px); align-items:center;
}
.work-item--reverse .work-item__media{ order:2; }
.work-item--reverse .work-item__body{ order:1; }
.work-item__media{
  border-radius:var(--radius); overflow:hidden; border:1px solid var(--line);
  aspect-ratio:1/1; display:flex; align-items:center; justify-content:center;
  background:rgba(246,240,230,.03);
}
.work-item__media img{ width:70%; }
.work-item__body h3{
  font-family:var(--serif); font-style:italic; font-weight:600;
  font-size:clamp(30px,3.4vw,42px); margin:6px 0 4px; color:var(--cream);
}
.work-item .card__meta{ color:var(--accent, var(--gold)); }
.work-item .card__role{ color:var(--accent, var(--cream)); }
.work-item .btn{ background:var(--accent, var(--cream)); border-color:var(--accent, var(--cream)); color:#14100b; margin-top:6px;}
.bullets{ padding-left:18px; margin:14px 0; color:var(--cream-dim); font-size:14.5px; }
.bullets li{ margin-bottom:6px; }

/* Contact */
.contact__wrap{
  display:grid; grid-template-columns:1.2fr .8fr; gap:clamp(28px,5vw,72px); align-items:center;
}
.contact__list{ list-style:none; padding:0; margin:26px 0 0; display:flex; flex-direction:column; gap:14px; }
.contact__list a{
  text-decoration:none; font-size:clamp(20px,2.6vw,28px); font-family:var(--serif); font-style:italic;
  color:var(--cream); border-bottom:1px solid transparent; transition:border-color .2s, color .2s;
}
.contact__list a:hover{ color:var(--gold); border-color:var(--gold); }
.contact__photo img{ border-radius:var(--radius); }

.footer{
  text-align:center; padding:32px 20px; color:var(--cream-dim); font-size:13px;
  border-top:1px solid var(--line);
}

/* ---------- Reveal on scroll ---------- */
.reveal{ opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease; }
.reveal.is-visible{ opacity:1; transform:translateY(0); }

@media (prefers-reduced-motion: reduce){
  .reveal{ opacity:1; transform:none; transition:none; }
  html{ scroll-behavior:auto; }
}

/* ---------- Responsive ---------- */
@media (max-width: 900px){
  .about, .work-item, .contact__wrap{ grid-template-columns:1fr; }
  .work-item--reverse .work-item__media{ order:0; }
  .work-item--reverse .work-item__body{ order:0; }
  .work-item__media{ max-width:280px; margin:0 auto; }
  .grid-2, .grid-3, .skills-row{ grid-template-columns:1fr; }
  .about__photo{ order:-1; }
}

@media (max-width: 720px){
  .nav__links{
    position:fixed; top:0; right:0; height:100vh; width:min(78vw,320px);
    background:var(--bg-alt); flex-direction:column; align-items:flex-start;
    padding:100px 32px 32px; gap:22px; transform:translateX(100%);
    transition:transform .35s ease; border-left:1px solid var(--line);
  }
  .nav__links.is-open{ transform:translateX(0); }
  .nav__toggle{ display:flex; z-index:41; }
  .hero__content{ padding-bottom:64px; }
}
