import { useState, useEffect } from 'react';
import Time from '../utils/Time';
import useApi from '../utils/Api';

export default function ApiPart() {
  const time = Time();
  const { api, error } = useApi();

  if (error) {
    return <div className="text-red-500 font-bold text-center mt-4">Error: {error}</div>;
  }

  if (!api.length) return <div>Loading...</div>;

  return (
    <div>
      <main>
        <section className="text-center pt-[60px] pb-[10px]">
          <div
            className="w-[190px] h-[190px] bg-center bg-cover mx-auto mb-[40px]"
            style={{ backgroundImage: `url('./assets/imgs/Bitcoin.svg')` }}
          ></div>
          <div className="w-[90%] max-w-[900px] mx-auto">
            <h2 className="text-black text-[1.5rem] font-bold leading-[1.7rem] mb-[25px] font-DM-Sans">
              Visibilizamos todas las tasas de cambio.
            </h2>
            <p className="text-grey text-[0.9rem] font-medium leading-[1.1rem]">
              Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.
            </p>
          </div>
        </section>

        <section className="w-[100%] max-w-[330px] min-w-[230px] h-[330px] bg-off-white mx-auto">
          <div className="w-[100%] h-[260px] p-[60px]">
            <p className="text-bitcoin-orange text-[1.1rem] font-bold leading-[1.0rem] mb-[15px] mt-[0px] font-DM-Sans mx-[10px]">
              Monedas
            </p>
            <div>
              {api.map((crypto, index) => {
                const priceUsd = parseFloat(crypto.priceUsd).toFixed(2);
                const changePercent = parseFloat(crypto.changePercent24Hr).toFixed(2);
                const priceChange = Math.abs((priceUsd * (changePercent / 100)).toFixed(2));

                let roundedClass = '';
                if (index === 0) {
                  roundedClass = 'rounded-t-lg';
                } else if (index === api.length - 1) {
                  roundedClass = 'rounded-b-lg';
                }

                return (
                  <div key={crypto.id} className={`flex mb-[2px] -mx-[4px] ${roundedClass} overflow-hidden`}>
                    <div className={`w-1/2 bg-just-white text-light-grey font-medium leading-[2.0rem] mr-[2px] pl-[14px] pr-[90px] ${index === 0 ? 'rounded-tl-lg' : ''} ${index === api.length - 1 ? 'rounded-bl-lg' : ''}`}>{crypto.name}</div>
                    <div className={`w-1/2 bg-just-white text-grey font-medium leading-[2.0rem] pr-[0px] pl-[12px] -mr-[30px] ${index === 0 ? 'rounded-tr-lg' : ''} ${index === api.length - 1 ? 'rounded-br-lg' : ''}`}>
                      $ {priceChange}
                      <span
                        className="inline-block w-[15px] h-[15px] ml-[10px] bg-no-repeat bg-center"
                        style={{
                          backgroundImage: `url('./assets/icons/${priceChange >= 0 ? 'trending-up' : 'trending-down'}.svg')`
                        }}
                      ></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-soft-orange text-warm-black p-[5px] rounded-md -mt-[22px] mx-[70px] text-center">
            <p className="text-[12px]">
              <b>Actualizado:</b> {time}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}






// import { useState, useEffect } from 'react';
// import Time from '../utils/Time';
// import Api from '../utils/Api';

// export function ApiPart() {
//   const time = Time();
//   const api = Api();

//   if (!api.length) return <div>Loading...</div>;

//   return (
//     <div>
//       <main>
//         <section className="text-center pt-[60px] pb-[10px]">
//           <div className="w-[190px] h-[190px] bg-center bg-cover mx-auto mb-[40px]" style={{ backgroundImage: `url('./assets/imgs/Bitcoin.svg')` }}></div>
//           <div className="w-[90%] max-w-[900px] mx-auto">
//             <h2 className="text-black text-[1.5rem] font-bold leading-[1.7rem] mb-[25px] font-DM-Sans">Visibilizamos todas las tasas de cambio.</h2>
//             <p className="text-grey text-[0.9rem] font-medium leading-[1.1rem]">Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
//           </div>
//         </section>

//         <section className="w-[100%] max-w-[330px] min-w-[230px] h-[330px] bg-black mx-auto rounded-lg">
//           <div className="w-[100%] h-[260px] p-[60px]">
//             <p className="text-bitcoin-orange text-[1.1rem] font-bold leading-[1.0rem] mb-[15px] mt-[0px] font-DM-Sans mx-[20px]">Monedas</p>
//             <div>
//               {api.map((crypto) => {
//                 const priceUsd = parseFloat(crypto.priceUsd).toFixed(2);
//                 const changePercent = parseFloat(crypto.changePercent24Hr).toFixed(2);
//                 const priceChange = Math.abs((priceUsd * (changePercent / 100)).toFixed(2));

//                 return (
//                   <div key={crypto.id} className="flex mb-[2px] mx-[5px] rounded-lg overflow-hidden">
//                     <div className="col-start-1 bg-just-white text-light-grey font-medium leading-[2.0rem] mr-[2px] pl-[14px] rounded-l-lg">{crypto.name}</div>
//                     <div className="col-start-2 bg-just-white text-grey font-medium leading-[2.0rem] mr-[2px] pr-[13.5px] pl-[12px] rounded-r-lg">
//                       ${priceChange}
//                       <span
//                         className="inline-block w-[15px] h-[15px] ml-[5px] bg-no-repeat bg-center"
//                         style={{
//                           backgroundImage: `url('./assets/icons/${priceChange >= 0 ? 'trending-up' : 'trending-down'}.svg')`
//                         }}
//                       ></span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="bg-soft-orange text-warm-black p-[5px] rounded-md -mt-[22px] mx-[70px] text-center">
//             <p className="text-[12px]"><b>Actualizado:</b> {time}</p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
