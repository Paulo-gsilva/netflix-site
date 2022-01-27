document.querySelector('.filmes').addEventListener('wheel', function(evento){
    
    if(evento.deltaY > 0){
        evento.target.scrollBy(-200, 0);
    }
    else
        evento.target.scrollBy(200, 0);
});

document.querySelector('.series').addEventListener('wheel', function(evento){
    
    if(evento.deltaY > 0){
        evento.target.scrollBy(-200, 0);
    }
    else
        evento.target.scrollBy(200, 0);
});