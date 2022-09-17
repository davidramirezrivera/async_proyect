const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2f4486b27fmsh156aff430c08ffep11122bjsn739231fe73ff',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch (urlApi,options);
    const data = await response.json();
    return data;
}

(async() =>{//funcion asincrona anonima que se ejecuta inmediatamente
    try{
        const videos= await fetchData(API);
        let view = `
        ${videos.items.map(video=>`
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
            </div>
        </div>`).slice(0,4).join('')}
            `;//creacion de un template que permite iterar la imagen por cada uno de los elementos 
            // el .slice permite escoger la cantidad de ITERACIONES QUE SE MOSTRARAN EN ESTE CASO COMO ES 0,4 serian 5 elememntos o videos a su vez join permite unir dichos elementos 
            //la constante view nos mostrara los videos que hay 
            // ${videos.items.map(video=> es una funcion que nos permite localizar 
            content.innerHTML = view;
    }catch (error) {
        console.log(error)
    }
})();