const url = "https://libretranslate.de/translate";
const input = document.querySelector('#input')
const output = document.querySelector('#output')
const inLang = document.querySelector('#input-language')
const outLang = document.querySelector('#output-language')


document.querySelector("#translate").addEventListener('click',()=>{
    
    translateMessage(input,inLang,outLang).then(data=>output.value = data.translatedText)
});



async function translateMessage(input,inLang,outLang){
        const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            q: input.value,
            source: inLang.value,
            target: outLang.value
            }),
            headers: { "Content-Type": "application/json" }
        });

        const result = await res.json();
        return result;

}

