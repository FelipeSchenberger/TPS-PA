// const apikey = '496B239C-E78F-487E-A15B-6CBBC840209E'
// const peticion = fetch(`https://rest.coinapi.io/v1/exchanges${apikey}`)

// peticion
//     .then(resp => resp.json())
//     .then((data) => {
        
//         console.log(exchanges.name)
//     })
//     .catch(console.warn)

// const apikey = '496B239C-E78F-487E-A15B-6CBBC840209E';
// const url = `https://rest.coinapi.io/v1/exchanges`;
// const headers = new Headers({
//     'X-CoinAPI-Key': apikey
// });

// fetch(url, { headers })
//     .then(resp => resp.json())
//     .then(data => {
//         const exchanges = data.slice(0, 16);
        
//         exchanges.forEach(exchange => {
//             const name = `Name: ${exchange.name}`;
//             const volume1hr = `Volume 1hr USD: ${exchange.volume_1hrs_usd.toFixed(2)}`;
//             const volume1day = `Volume 1day USD: ${exchange.volume_1day_usd.toFixed(2)}`;
            
//             console.log(name);
//             console.log(volume1hr);
//             console.log(volume1day);
//             console.log(''); // Espacio entre grupos
//         });
//     })
//     .catch(console.warn);

const apikey = '496B239C-E78F-487E-A15B-6CBBC840209E'
const url = `https://rest.coinapi.io/v1/exchanges`
const headers = new Headers({
    'X-CoinAPI-Key': apikey
});
fetch(url, { headers })
    .then(resp => resp.json())
    .then(data => {
        const exchanges = data.slice(0, 16)
        
        let content = ''
        exchanges.forEach(exchange => {
            const text = `Name: ${exchange.name}\nVolume 1hr USD: ${exchange.volume_1hrs_usd.toFixed(2)}\nVolume 1day USD: ${exchange.volume_1day_usd.toFixed(2)}\n\n`
            content += text
        });
        document.body.innerHTML = `<pre>${content}</pre>`
    })
    .catch(console.warn)
