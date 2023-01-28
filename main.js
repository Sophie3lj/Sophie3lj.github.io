let autoScroll = false;

function scrollToAboutMe() {
    autoScroll = true;
    document.getElementById("about-me").scrollIntoView({behavior : "smooth"});

    document.getElementById("about-me-nav-item").classList.add("selected");
    document.getElementById("education-nav-item").classList.remove("selected");
    document.getElementById("experience-nav-item").classList.remove("selected");
    document.getElementById("projects-nav-item").classList.remove("selected");
    document.getElementById("contact-nav-item").classList.remove("selected");
    document.getElementById("nav-bar").classList.add("about-me-select");
    document.getElementById("nav-bar").classList.remove("education-select");
    document.getElementById("nav-bar").classList.remove("experience-select");
    document.getElementById("nav-bar").classList.remove("projects-select");
    document.getElementById("nav-bar").classList.remove("contact-select");

    setTimeout(()=>{autoScroll = false;}, 800);
}

function scrollToEducation() {
    autoScroll = true;
    document.getElementById("education").scrollIntoView({behavior : "smooth"});

    document.getElementById("about-me-nav-item").classList.remove("selected");
    document.getElementById("education-nav-item").classList.add("selected");
    document.getElementById("experience-nav-item").classList.remove("selected");
    document.getElementById("projects-nav-item").classList.remove("selected");
    document.getElementById("contact-nav-item").classList.remove("selected");
    document.getElementById("nav-bar").classList.add("education-select");
    document.getElementById("nav-bar").classList.remove("about-me-select");
    document.getElementById("nav-bar").classList.remove("experience-select");
    document.getElementById("nav-bar").classList.remove("projects-select");
    document.getElementById("nav-bar").classList.remove("contact-select");

    setTimeout(()=>{autoScroll = false;}, 800);
}

function scrollToExperience() {
    autoScroll = true;
    document.getElementById("experience").scrollIntoView({behavior : "smooth"});

    document.getElementById("about-me-nav-item").classList.remove("selected");
    document.getElementById("education-nav-item").classList.remove("selected");
    document.getElementById("experience-nav-item").classList.add("selected");
    document.getElementById("projects-nav-item").classList.remove("selected");
    document.getElementById("contact-nav-item").classList.remove("selected");
    document.getElementById("nav-bar").classList.add("experience-select");
    document.getElementById("nav-bar").classList.remove("education-select");
    document.getElementById("nav-bar").classList.remove("about-me-select");
    document.getElementById("nav-bar").classList.remove("projects-select");
    document.getElementById("nav-bar").classList.remove("contact-select");

    setTimeout(()=>{autoScroll = false;}, 800);
}

function scrollToProjects() {
    autoScroll = true;
    document.getElementById("projects").scrollIntoView({behavior : "smooth"});

    document.getElementById("about-me-nav-item").classList.remove("selected");
    document.getElementById("education-nav-item").classList.remove("selected");
    document.getElementById("experience-nav-item").classList.remove("selected");
    document.getElementById("projects-nav-item").classList.add("selected");
    document.getElementById("contact-nav-item").classList.remove("selected");
    document.getElementById("nav-bar").classList.add("projects-select");
    document.getElementById("nav-bar").classList.remove("education-select");
    document.getElementById("nav-bar").classList.remove("experience-me-select");
    document.getElementById("nav-bar").classList.remove("about-me-select");
    document.getElementById("nav-bar").classList.remove("contact-select");

    setTimeout(()=>{autoScroll = false;}, 800);
}

function scrollToContact() {
    autoScroll = true;
    document.getElementById("contact").scrollIntoView({behavior : "smooth"});

    document.getElementById("about-me-nav-item").classList.remove("selected");
    document.getElementById("education-nav-item").classList.remove("selected");
    document.getElementById("experience-nav-item").classList.remove("selected");
    document.getElementById("projects-nav-item").classList.remove("selected");
    document.getElementById("contact-nav-item").classList.add("selected");
    document.getElementById("nav-bar").classList.add("contact-select");
    document.getElementById("nav-bar").classList.remove("projects-select");
    document.getElementById("nav-bar").classList.remove("education-select");
    document.getElementById("nav-bar").classList.remove("experience-me-select");
    document.getElementById("nav-bar").classList.remove("about-me-select");

    setTimeout(()=>{autoScroll = false;}, 800);
}

let scrollValue = 0;

function test() {
    const aboutMe = document.getElementById("about-me").getBoundingClientRect();
    const education = document.getElementById("education").getBoundingClientRect();
    const experienceStart = document.getElementById("experience").getBoundingClientRect();
    const experienceEnd = document.getElementById("experience-end").getBoundingClientRect();
    const projects = document.getElementById("projects").getBoundingClientRect();
    const projectsEnd = document.getElementById("projects-end").getBoundingClientRect();
    const contact = document.getElementById("contact").getBoundingClientRect();

    const newScrollValue = aboutMe.y;

    if (autoScroll == false) {
        // scroll up
        if (newScrollValue < scrollValue) {
            if (education.top <= 0 && !(experienceStart.top <= 0)) {
                document.getElementById("about-me-nav-item").classList.remove("selected");
                document.getElementById("education-nav-item").classList.add("selected");
                document.getElementById("experience-nav-item").classList.remove("selected");
                document.getElementById("projects-nav-item").classList.remove("selected");
                document.getElementById("contact-nav-item").classList.remove("selected");
                document.getElementById("nav-bar").classList.add("education-select");
                document.getElementById("nav-bar").classList.remove("about-me-select");
                document.getElementById("nav-bar").classList.remove("experience-select");
                document.getElementById("nav-bar").classList.remove("projects-select");
                document.getElementById("nav-bar").classList.remove("contact-select");
            }
            else if (experienceStart.top <= 0 && !(projects.top <= 0)) {
                document.getElementById("about-me-nav-item").classList.remove("selected");
                document.getElementById("education-nav-item").classList.remove("selected");
                document.getElementById("experience-nav-item").classList.add("selected");
                document.getElementById("projects-nav-item").classList.remove("selected");
                document.getElementById("contact-nav-item").classList.remove("selected");
                document.getElementById("nav-bar").classList.add("experience-select");
                document.getElementById("nav-bar").classList.remove("education-select");
                document.getElementById("nav-bar").classList.remove("about-me-select");
                document.getElementById("nav-bar").classList.remove("projects-select");
                document.getElementById("nav-bar").classList.remove("contact-select");
            }
            else if (contact.bottom <= window.innerHeight) {
                document.getElementById("about-me-nav-item").classList.remove("selected");
                document.getElementById("education-nav-item").classList.remove("selected");
                document.getElementById("experience-nav-item").classList.remove("selected");
                document.getElementById("projects-nav-item").classList.remove("selected");
                document.getElementById("contact-nav-item").classList.add("selected");
                document.getElementById("nav-bar").classList.remove("experience-select");
                document.getElementById("nav-bar").classList.remove("education-select");
                document.getElementById("nav-bar").classList.remove("about-me-select");
                document.getElementById("nav-bar").classList.remove("projects-select");
                document.getElementById("nav-bar").classList.add("contact-select");
            }
            else if (projects.top <= 0) {
                document.getElementById("about-me-nav-item").classList.remove("selected");
                document.getElementById("education-nav-item").classList.remove("selected");
                document.getElementById("experience-nav-item").classList.remove("selected");
                document.getElementById("projects-nav-item").classList.add("selected");
                document.getElementById("contact-nav-item").classList.remove("selected");
                document.getElementById("nav-bar").classList.remove("experience-select");
                document.getElementById("nav-bar").classList.remove("education-select");
                document.getElementById("nav-bar").classList.remove("about-me-select");
                document.getElementById("nav-bar").classList.add("projects-select");
                document.getElementById("nav-bar").classList.remove("contact-select");
            }
        }
        // scroll down
        else {
            if (aboutMe.bottom >= 10) {
                document.getElementById("about-me-nav-item").classList.add("selected");
                document.getElementById("education-nav-item").classList.remove("selected");
                document.getElementById("experience-nav-item").classList.remove("selected");
                document.getElementById("projects-nav-item").classList.remove("selected");
                document.getElementById("contact-nav-item").classList.remove("selected");
                document.getElementById("nav-bar").classList.add("about-me-select");
                document.getElementById("nav-bar").classList.remove("education-select");
                document.getElementById("nav-bar").classList.remove("experience-select");
                document.getElementById("nav-bar").classList.remove("projects-select");
                document.getElementById("nav-bar").classList.remove("contact-select");
            } 
            else if(education.bottom >= 10 && !(aboutMe.bottom >= 10)) {
                document.getElementById("about-me-nav-item").classList.remove("selected");
                document.getElementById("education-nav-item").classList.add("selected");
                document.getElementById("experience-nav-item").classList.remove("selected");
                document.getElementById("projects-nav-item").classList.remove("selected");
                document.getElementById("contact-nav-item").classList.remove("selected");
                document.getElementById("nav-bar").classList.add("education-select");
                document.getElementById("nav-bar").classList.remove("about-me-select");
                document.getElementById("nav-bar").classList.remove("experience-select");
                document.getElementById("nav-bar").classList.remove("projects-select");
                document.getElementById("nav-bar").classList.remove("contact-select");
            }
            else if (experienceEnd.bottom >= 10 && ! (education.bottom >= 10)) {
                document.getElementById("about-me-nav-item").classList.remove("selected");
                document.getElementById("education-nav-item").classList.remove("selected");
                document.getElementById("experience-nav-item").classList.add("selected");
                document.getElementById("projects-nav-item").classList.remove("selected");
                document.getElementById("contact-nav-item").classList.remove("selected");
                document.getElementById("nav-bar").classList.add("experience-select");
                document.getElementById("nav-bar").classList.remove("education-select");
                document.getElementById("nav-bar").classList.remove("about-me-select");
                document.getElementById("nav-bar").classList.remove("projects-select");
                document.getElementById("nav-bar").classList.remove("contact-select");
            } 
            else if (projectsEnd.bottom >= 10 && ! (experienceEnd.bottom >= 10)) {
                document.getElementById("about-me-nav-item").classList.remove("selected");
                document.getElementById("education-nav-item").classList.remove("selected");
                document.getElementById("experience-nav-item").classList.remove("selected");
                document.getElementById("projects-nav-item").classList.add("selected");
                document.getElementById("contact-nav-item").classList.remove("selected");
                document.getElementById("nav-bar").classList.remove("experience-select");
                document.getElementById("nav-bar").classList.remove("education-select");
                document.getElementById("nav-bar").classList.remove("about-me-select");
                document.getElementById("nav-bar").classList.add("projects-select");
                document.getElementById("nav-bar").classList.remove("contact-select");
            } 
        }
    }

    scrollValue = newScrollValue;
}