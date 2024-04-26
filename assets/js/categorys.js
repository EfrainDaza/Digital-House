
    let category = 1;
    let service = 1;

    let SERVICES_BY_CATEGORIES = [
        [1, 2, 3],
        [4, 5, 6],
        [7],
        [8],
        [9, 10, 11, 12]
    ];

    function renderCategories() {
        let categories = document.getElementsByClassName('service__content');
        for (let i = 0; i < categories.length; i++) {
            categories[i].className = categories[i].className.replace("active-category", "");
            if (i === category - 1) {
                categories[i].className += " active-category";
            }
        }
        showServicesByCategory();
    }

    function selectCategory(index) {
        category = index;
        selectInformation(SERVICES_BY_CATEGORIES[index - 1][0]);
        renderCategories();
    }

    function showServicesByCategory() {
        let services = document.getElementsByClassName('service__item');
        for (let i = 0; i < services.length; i++) {
            services[i].style.display = "none";
            if (findService(i)) {
                services[i].style.display = "block";
            }
        }
    }

    function findService(index) {
        return SERVICES_BY_CATEGORIES[category - 1].findIndex(serviceElement => {
            return serviceElement === index + 1;
        }) > -1;
    }

    function showInformation() {
        let informations = document.getElementsByClassName('service__list-detalles');
        let services = document.getElementsByClassName('service__item');
        for (let i = 0; i < informations.length; i++) {
            informations[i].className = informations[i].className.replace("show", "");
            services[i].className = services[i].className.replace("active__service", "");
            if (i === service - 1) {
                services[i].className += " active__service";
                informations[i].className += " show";
            }
        }
    }

    function selectInformation(index) {
        service = index;
        showInformation();
    }

    renderCategories();
    showInformation();

    

