const tooltips = document.querySelectorAll('.has-tooltip');
const body = document.querySelector('body');

tooltips.forEach( (tip) => {

    tip.addEventListener('click', (e) => {

        //const currentActiveTip = document.querySelector('tooltip_active');
        //currentActiveTip.classList.remove('tooltip_active');

        e.preventDefault();
        const tooltip = document.createElement('div');
        body.appendChild(tooltip);
        tooltip.classList.add('tooltip', 'tooltip_active');
        tooltip.textContent = tip.title;
        tooltip.style = 'left: 0; top: 0';
        //tooltip.setAttribute("data-position", "left"); 
        //console.log(tooltip);

    } );

} );