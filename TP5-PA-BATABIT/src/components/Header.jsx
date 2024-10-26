
export const Header = () => {
    return (
      <header className="relative grid flex-col justify-center bg-gradient-to-bl from-black to-bitcoin-orange text-center h-[295px] w-100% min-w-302">
        <img src="./assets/imgs/logo.svg" alt="Logo de Batabit" className="w-[151px] h-[24px] mt-[20px] place-self-center" />
        <div className="w-[90%] min-w-[288px] max-w-[900px] h-[180px] text-center self-center">
          <h1 className="text-just-white text-[1.5rem] font-bold leading-[1.7rem] font-DM-Sans mx-[7px]">La próxima revolución en el intercambio de criptomonedas.</h1>
          <p className="text-soft-orange text-[0.8rem] font-bold leading-[1.2rem] mt-[25px] font-DM-Sans mx-[7px]">Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
          <a href="/" className="absolute left-[50%] translate-x-[-50%] top-[270px] bg-off-white px-4 py-3 w-[229px] h-[48px] rounded-[4px] shadow-md font-bold text-black text-[0.9rem] ">
            Conoce Nuestros Planes <span className="inline-block w-[13px] h-[8px] ml-2 bg-no-repeat bg-center" style={{ backgroundImage: `url('./assets/icons/down-arrow.svg')` }}></span>
          </a>
        </div>
      </header>
    )
}




