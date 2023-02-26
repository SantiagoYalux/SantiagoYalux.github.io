
const flagsElements = document.getElementById("Flags");

flagsElements.addEventListener("click", (e)=>{
    changeLanguage(e.target.parentElement.dataset.language)
});

const textsToChange = document.querySelectorAll("[data-section]")

const changeLanguage = async language=>{
    const requestJson = await fetch(`./Languages/${language}.json`);
    
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        
        textToChange.innerHTML = texts[section][value];
    }
}

 