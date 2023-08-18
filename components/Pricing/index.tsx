"use client";

import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Tabela de preços ArtMoon"
          paragraph="Veja abaixo as Tabela de preços com nossos 3 Tipos de opções de criação de Sites. Todos com preço abaixo da concorrência e que cabe no seu Bolso."
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >

            <div
              className="flex cursor-pointer items-center"
            >

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Templates"
            price= "300"
            subtitle="Uma coleção incrível de templates a seu gosto. Adaptamos a sua Marca."
          >
            <OfferList text="Design Moderno" status="active" />
            <OfferList text="+100 Templates a sua Escolha" status="active" />
            <OfferList text="Uso Comercial" status="active" />
            <OfferList text="Suporte atencioso" status="active" />
            <OfferList text="Responsivo e Fluído" status="inactive" />
            <OfferList text="Serviço de Hospedagem" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Yampi"
            price= "400"
            subtitle="Lance sua Loja Virtual e venda muito mais. O Essencial para sua Loja!"
          >
            <OfferList text="Design Básico" status="active" />
            <OfferList text="Aceite pagamentos tradicionais" status="active" />
            <OfferList text="Uso Comercial" status="active" />
            <OfferList text="Suporte atencioso" status="active" />
            <OfferList text="Responsivo e Fluído" status="active" />
            <OfferList text="Serviço de Hospedagem" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="WiX"
            price= "500"
            subtitle="Destaque sua Loja com Layouts e funcionalidades mais avançadas!"
          >
            <OfferList text="Design Sofisticado" status="active" />
            <OfferList text="Aceite pagamentos tradicionais" status="active" />
            <OfferList text="Uso Comercial" status="active" />
            <OfferList text="Suporte atencioso" status="active" />
            <OfferList text="Responsivo e Fluído" status="active" />
            <OfferList text="Serviço de Hospedagem" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4af767" />
              <stop offset="1" stopColor="#4af767" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4af767" />
              <stop offset="1" stopColor="#4af767" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
