const url = "https://libretranslate.de/translate";
const input = document.querySelector('#input').value;
const output = document.querySelector('#output').value;
const inputLang = document.querySelector('#input-language').value;
const outputLang = document.querySelector('#output-language').value;


document.querySelector("#translate").addEventListener('click',(input,output,inLang,outLang)=>{
    translateMessage(input,inLang,outLang).then(data=>output = data.translatedText)
});



async function translateMessage(input,inLang,outLang){
        const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            q: input,
            source: inLang,
            target: outLang,
            }),
            headers: { "Content-Type": "application/json" }
        });

        const result = await res.json();
        return result;

}

