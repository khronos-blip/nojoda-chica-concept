const episodes = [
  {id:'MtCpiE3yiYY',number:'80',title:'Volvemos a Venezuela, LUKAS 630 y CUSICAFEST 2026'},
  {id:'lVQ1dw1Np4c',number:'79',title:'El caso de la tapa del frasco: ¿poderosa o habla paja?'},
  {id:'lOSnofSx3xo',number:'78',title:'El poder y la desgracia de la feminidad con Jorge Chacón'},
  {id:'ooj2NGARVQs',number:'77',title:'Bedazzling y las tendencias más ridículas que hemos seguido'},
  {id:'sJfO2-InqTs',number:'76',title:'Fuimos a una batalla de farmear aura en CDMX'},
  {id:'iKLsEdYQWyM',number:'75',title:'Frenemies: el enemigo está en tu grupo'}
];
const grid=document.querySelector('#episode-grid');
grid.innerHTML=episodes.map(e=>`<article class="episode-card"><button class="episode-media" type="button" data-video="${e.id}" aria-label="Reproducir episodio ${e.number}: ${e.title}"><img src="assets/${e.id}.jpg" alt="Portada oficial del episodio ${e.number}" loading="lazy"><span aria-hidden="true">▶</span></button><div class="episode-meta">EP ${e.number} · YOUTUBE</div><h3>${e.title}</h3><a href="https://www.youtube.com/watch?v=${e.id}" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a></article>`).join('');
const videoDialog=document.querySelector('#video-dialog');
function openVideo(id){const ep=episodes.find(e=>e.id===id);document.querySelector('.video-frame').innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" title="${ep.title}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;document.querySelector('.video-title').textContent=`EP ${ep.number} · ${ep.title}`;document.querySelector('.video-external').href=`https://www.youtube.com/watch?v=${id}`;videoDialog.showModal()}
grid.addEventListener('click',e=>{const button=e.target.closest('[data-video]');if(button)openVideo(button.dataset.video)});
document.querySelector('.play-featured').addEventListener('click',()=>openVideo(episodes[0].id));
const demoDialog=document.querySelector('#demo-dialog');
document.querySelector('[data-demo="web"]').addEventListener('click',()=>demoDialog.showModal());
document.querySelectorAll('.close-dialog').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(d=>{d.addEventListener('click',e=>{if(e.target===d)d.close()});d.addEventListener('close',()=>{if(d===videoDialog)document.querySelector('.video-frame').innerHTML=''})});
const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.site-header nav');menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
