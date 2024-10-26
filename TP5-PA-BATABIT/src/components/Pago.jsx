import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Pago = () => {
  return (
    <section className="text-center">
      <h2 className="pt-[60px] text-2xl font-bold px-[15px]">Escoge el plan que mejor se ajuste a ti.</h2>
      <p className="pt-[15px] px-[15px] text-gray-500 text-[0.9rem] leading-[1.2rem] mb-3">Cualquier plan te da acceso completo a nuestra plataforma.</p>
      
      <Swiper
        spaceBetween={-120}
        slidesPerView={1}
        // centeredSlides={true}
        initialSlide={1.5}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        <SwiperSlide className='px-[60px] pt-[40px] pb-[60px]'>
          <div className="p-6 bg-off-white rounded-[9px] shadow-xl">
            <span className="bg-bitcoin-orange absolute text-white font-bold px-2 py-[7px] rounded-[8px] left-[50%] translate-x-[-50%] -mt-[41px] text-[0.8rem] inline-block">Recomendado</span>
            <h3 className="text-[1.0rem] font-meduim -mb-[8px]">Pago Anual</h3>
            <div className='flex justify-between'>
                <p className="ml-[20px] mt-[20px] text-[0.8rem] font-bold text-grey">$</p>
                <p className="mr-[35px] inline-block text-[3.4rem] font-DM-Sans font-bold mt-[5px]">90</p>
            </div>
            <p className="text-gray-500 mb-[15px] -mx-[10px] font-medium text-[0.8rem] leading-[1.0rem] -mt-[5px]">*Ahorras $129 comparado al plan mensual.</p>
            <div className='flex justify-center'>
              <a href="/" className="bg-off-white text-black border-[2px] border-bitcoin-orange font-semibold text-[0.9rem] px-[10px] py-[10px] -mx-[1px] rounded-[4px]">
                Escoger este
                <span className="inline-block w-[13px] h-[8px] ml-[15px] bg-no-repeat bg-center" style={{ backgroundImage: `url('./assets/icons/orange-right-arrow.svg')` }}></span>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='px-[65px] pt-[40px] pb-[60px]'>
          <div className="shadow-xl p-6 bg-off-white rounded-[9px]">
            <span className="bg-bitcoin-orange absolute text-white font-bold px-2 py-[7px] rounded-[8px] left-[50%] translate-x-[-50%] -mt-[41px] text-[0.8rem] inline-block">Recomendado</span>
            <h3 className="text-[1.0rem] font-meduim -mb-[8px]">Pago Anual</h3>
            <div className='flex justify-between'>
                <p className="ml-[20px] mt-[20px] text-[0.8rem] font-bold text-grey">$</p>
                <p className="mr-[35px] inline-block text-[3.4rem] font-DM-Sans font-bold mt-[5px]">70</p>
            </div>
            <p className="text-gray-500 mb-[15px] -mx-[10px] font-medium text-[0.8rem] leading-[1.0rem] -mt-[5px]">*Ahorras $129 comparado al plan mensual.</p>
            <div className='flex justify-center'>
              <a href="/" className="bg-off-white text-black border-[2px] border-bitcoin-orange font-semibold text-[0.9rem] px-[10px] py-[10px] -mx-[1px] rounded-[4px]">
                Escoger este
                <span className="inline-block w-[13px] h-[8px] ml-[15px] bg-no-repeat bg-center" style={{ backgroundImage: `url('./assets/icons/orange-right-arrow.svg')` }}></span>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='px-[65px] pt-[40px] pb-[60px]'>
          <div className="shadow-xl p-6 bg-off-white rounded-[9px]">
            <span className="bg-bitcoin-orange absolute text-white font-bold px-2 py-[7px] rounded-[8px] left-[50%] translate-x-[-50%] -mt-[41px] text-[0.8rem] inline-block">Recomendado</span>
            <h3 className="text-[1.0rem] font-meduim -mb-[8px]">Pago Anual</h3>
            <div className='flex justify-between'>
                <p className="ml-[20px] mt-[20px] text-[0.8rem] font-bold text-grey">$</p>
                <p className="mr-[40px] inline-block text-[3.4rem] font-DM-Sans font-bold mt-[5px]">99</p>
            </div>
            <p className="text-gray-500 mb-[15px] -mx-[10px] font-medium text-[0.8rem] leading-[1.0rem] -mt-[5px]">*Ahorras $129 comparado al plan mensual.</p>
            <div className='flex justify-center'>
              <a href="/" className="bg-off-white text-black border-[2px] border-bitcoin-orange font-semibold text-[0.9rem] px-[10px] py-[10px] -mx-[1px] rounded-[4px]">
                Escoger este
                <span className="inline-block w-[13px] h-[8px] ml-[15px] bg-no-repeat bg-center" style={{ backgroundImage: `url('./assets/icons/orange-right-arrow.svg')` }}></span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
