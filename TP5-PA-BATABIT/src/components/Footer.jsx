export const Footer = () => {
    return (
      <footer className="w-full min-w-[300px] h-[155px] bg-bitcoin-orange text-off-white flex justify-between items-center px-[65px]">
        <div className="mb-[40px]">
          <p className="pt-[40px] font-medium text-[0.9rem]">Linkedin</p>
          <p className="pt-[5px] font-medium text-[0.9rem]">Crunchbase</p>
          <p className="pt-[5px] font-medium text-[0.9rem]">Hackernews</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="./assets/imgs/logo-footer.svg" alt="Logo de Batabit" className="w-[151px] h-[50px] ml-[50px]" />
        </div>
      </footer>
    )
  }
  