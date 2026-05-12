function searchSection(){

    let input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const sections = {

        "home":"home",
        "about me":"about",
        "skills":"skills",
        "projects":"projects",
        "certification":"certification",
        "achievement":"achievement",
        "contact":"contact"

    };

    if(sections[input]){

        document
        .getElementById(sections[input])
        .scrollIntoView({
            behavior:"smooth"
        });

    }

}