let color = document.getElementById('key')


document.addEventListener('keydown', (e) =>{
    
    if(e.key === 'a' || e.key === 'A'){
        color.style.backgroundColor='pink'
    }else if (e.key ==='s' || e.key ==='S'){
        color.style.backgroundColor='orange'
    }else if (e.key === 'd' || e.key ==='D'){
        color.style.backgroundColor='lightblue'
    }
})

document.addEventListener('keydown', (e) =>{

    if(e.key === 'q' || e.key === 'Q'){
        key1.style.backgroundColor='purple'
    }else if (e.key ==='w' || e.key ==='W'){
        key1.style.backgroundColor='grey'
    }else if (e.key === 'e' || e.key ==='E'){
        key1.style.backgroundColor='brown'
    }

    
})




