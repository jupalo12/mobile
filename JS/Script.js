// botao de discussion
function mudarDiscussion(){
    document.getElementById('cus').style.display = 'none';
    document.getElementById('Dis').style.display = 'block';
    document.getElementById('btnDiscussion').style.backgroundColor = '#292B2D' ;
    document.getElementById('btnContent').style.backgroundColor = '#161719' ;
    document.getElementById('linkClick').href
};
// botao de Content
function mudarContent(){
    document.getElementById('Dis').style.display = 'none';
    document.getElementById('cus').style.display = 'block';
    document.getElementById('btnContent').style.backgroundColor = 'rgb(33, 35, 37)';
    document.getElementById('btnDiscussion').style.backgroundColor = '#161719' ;
};

function clickMenu(){
    document.getElementById('home').style.backgroundColor = 'red';
};


