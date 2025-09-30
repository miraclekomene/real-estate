function showLanguageOptions() {
    const langDiv = document.querySelector('.language');
    if(langDiv.style.display === 'block'){
        langDiv.style.display = 'none';
        document.querySelector(".caret-icon").style.transform = "rotate(0deg)";

    } else {
        document.querySelector(".caret-icon").style.transform = "rotate(180deg)";
        langDiv.style.display = 'block';
    }
}

function showFilterOptions() {
    const filterDiv = document.querySelector('.filter-options');
    if(filterDiv.style.display === 'block'){
        filterDiv.style.display = 'none';
    } else {
        filterDiv.style.display = 'block';
    }
}