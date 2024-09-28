
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');
    const multiselectCheckbox = document.getElementById('multiselect');


    expandAccordion(accordions[0]);

    accordions.forEach(accordion => {
        const titleSection = accordion.querySelector('.title-section');
        const description = accordion.querySelector('.description');
        const expandIcon = accordion.querySelector('.expand-icon');
        const collapseIcon = accordion.querySelector('.collapse-icon');

       
        if (accordion !== accordions[0]) {
            description.style.display = 'none';
            collapseIcon.style.display = 'none';
        }

        // Toggle accordion on click
        titleSection.addEventListener('click', () => {
            const isMultipleAllowed = multiselectCheckbox.checked;

            if (description.style.display === 'none') {
                if (!isMultipleAllowed) {
                   
                    accordions.forEach(otherAccordion => {
                        if (otherAccordion !== accordion) {
                            collapseAccordion(otherAccordion);
                        }
                    });
                }
                expandAccordion(accordion);
            } else {
                collapseAccordion(accordion);
            }
        });
    });

    //  expand an accordion
    function expandAccordion(accordion) {
        const description = accordion.querySelector('.description');
        const expandIcon = accordion.querySelector('.expand-icon');
        const collapseIcon = accordion.querySelector('.collapse-icon');

        description.style.display = 'block';
        expandIcon.style.display = 'none';
        collapseIcon.style.display = 'block';
    }

    //  collapse an accordion
    function collapseAccordion(accordion) {
        const description = accordion.querySelector('.description');
        const expandIcon = accordion.querySelector('.expand-icon');
        const collapseIcon = accordion.querySelector('.collapse-icon');

        description.style.display = 'none';
        expandIcon.style.display = 'block';
        collapseIcon.style.display = 'none';
    }
});
