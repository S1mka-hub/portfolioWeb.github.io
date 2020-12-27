

document.querySelector('.gallery').addEventListener('click', event => {
    let elemTarget = event.target.id;
    let classWeb = document.querySelectorAll('.web');
    let classApps = document.querySelectorAll('.apps');
    if (elemTarget == 'web') {


        classWeb.forEach(elem => {
            elem.classList.remove('hide')
        });
        classApps.forEach(elem => {
            elem.classList.add('hide')
        });

    }else if(elemTarget =="apps"){
        classApps.forEach(elem => {
            elem.classList.remove('hide')
        });
        classWeb.forEach(elem => {
            elem.classList.add('hide')
        });

    }else {
       document.querySelectorAll('.portfolio__colum').forEach(elem => {
           elem.classList.remove('hide')
       });
    }
});