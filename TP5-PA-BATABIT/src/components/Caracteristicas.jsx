export const Caracteristicas = () => {
    return (
        <div >
           <section className="bg-warm-black text-white py-[55px]">
            <div className="text-center w-[90%] max-w-[900px] mx-auto">
              <h2 className="text-[1.5rem] font-bold leading-[1.8rem]">Creamos un producto sin comparación.</h2>
              <p className="text-gray-400 text-[0.9rem] mt-[20px] -mb-[8px]">Confiable y diseñado para su uso diario.</p>
            </div>
  
            <div className="w-[90%] max-w-[900px] mx-auto grid gap-[16px] mt-10">
              <div className="bg-black p-4 rounded-md shadow-md">
                <img src="./assets/icons/clock.svg" alt="clock" className="w-[20px] h-[20px] mb-[5px]" />
                <p className="text-[1.3rem] font-bold mb-[5px]">Tiempo real</p>
                <p className="text-gray-400 text-[0.9rem]">Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
              </div>
  
              <div className="bg-black p-4 rounded-md shadow-md">
                <img src="./assets/icons/eye.svg" alt="eye" className="w-[20px] h-[20px] mb-[5px]" />
                <p className="text-[1.3rem] font-bold mb-[5px]">No hay tasas escondidas</p>
                <p className="text-gray-400 text-[0.9rem]">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
              </div>
  
              <div className="bg-black p-4 rounded-md shadow-md">
                <img src="./assets/icons/dollar-sign.svg" alt="dollar" className="w-[20px] h-[20px] mb-[5px]" />
                <p className="text-[1.3rem] font-bold mb-[5px]">Compare monedas</p>
                <p className="text-gray-400 text-[0.9rem]">No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.</p>
              </div>
  
              <div className="bg-black p-4 rounded-md shadow-md">
                <img src="./assets/icons/check-circle.svg" alt="check" className="w-[20px] h-[20px] mb-[5px]" />
                <p className="text-[1.3rem] font-bold mb-[5px]">Información confiable</p>
                <p className="text-gray-400 text-[0.9rem]">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
              </div>
            </div>
          </section>
  
          <section className="h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(./assets/imgs/bitcoinbaby2x.jpg)` }}>
            <h2 className="text-white text-[1.6rem] font-bold text-center pt-[60px]">Conócelo hoy.</h2>
          </section> 
        </div>
        

    )
}