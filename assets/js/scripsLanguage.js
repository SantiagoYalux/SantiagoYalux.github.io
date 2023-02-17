
const flagsElements = document.getElementById("Flags");

flagsElements.addEventListener("click", (e)=>{
    changeLanguage(e.target.parentElement.dataset.language)
});

const changeLanguage = async language=>{
    const requestJson = await fetch(`./Languages/${language}.json`);
    
    const texts = await requestJson.json();

    console.log(texts);
}