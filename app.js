(function(){
  var links = document.querySelectorAll('.rail-link');
  var panels = document.querySelectorAll('.panel');

  function show(panelId){
    panels.forEach(function(p){ p.classList.toggle('active', p.id === 'panel-' + panelId); });
    links.forEach(function(l){ l.classList.toggle('active', l.dataset.panel === panelId); });
    window.scrollTo(0,0);
  }

  links.forEach(function(link){
    link.addEventListener('click', function(){
      var id = link.dataset.panel;
      history.replaceState(null, '', '#' + id);
      show(id);
    });
  });

  var initial = (location.hash || '#hub').replace('#','');
  if(document.getElementById('panel-' + initial)){
    show(initial);
  }
})();
