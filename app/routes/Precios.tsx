import React from 'react';
import PriceCard from '~/Components/PriceCard';

const pricingPlans = [
  {
    title: "Plan Basico",
    price: 99,
    features: [
      { name: "Accesso al CRM de Senda", included: true },
      { name: "Automatisaziones de chatbot", included: true },
      { name: "Instalacion inicial", included: true },
      { name: "1 video de Publicidad (Meta Ads)", included: true },
      { name: "Accesso a App Mobil", included: true },
      { name: "Gestion de reputacion", included: false },
      { name: "Chatbot con integracion IA con ChatGPT", included: false },
      { name: "Agenda de citas automaticas", included: false },
      { name: "Tutoriales basicos para Meta Ads", included: false },
      { name: "Publicaciones en Meta Ads", included: false },
      { name: "Soporte illimitado", included: false },
    ],
  },
  {
    title: "Plan Pro",
    price: 149,
    features: [
      { name: "Accesso al CRM de Senda", included: true },
      { name: "Automatisaziones de chatbot", included: true },
      { name: "Instalacion inicial", included: true },
      { name: "1 video de Publicidad (Meta Ads)", included: true },
      { name: "Accesso a App Mobil", included: true },
      { name: "Gestion de reputacion", included: true },
      { name: "Chatbot con integracion IA con ChatGPT", included: true },
      { name: "Agenda de citas automaticas", included: true },
      { name: "Tutoriales basicos para Meta Ads", included: true },
      { name: "Publicaciones en Meta Ads", included: false },
      { name: "Soporte illimitado", included: false },
    ],
  },
  {
    title: "Plan VIP",
    price: 299,
    features: [
      { name: "Accesso al CRM de Senda", included: true },
      { name: "Automatisaziones de chatbot", included: true },
      { name: "Instalacion inicial", included: true },
      { name: "1 video de Publicidad (Meta Ads)", included: true },
      { name: "Accesso a App Mobil", included: true },
      { name: "Gestion de reputacion", included: true },
      { name: "Chatbot con integracion IA con ChatGPT", included: true },
      { name: "Agenda de citas automaticas", included: true },
      { name: "Tutoriales basicos para Meta Ads", included: true },
      { name: "Publicaciones en Meta Ads", included: true },
      { name: "Soporte illimitado", included: true},
    ],
  },
];

const Precios = () => {
  return (
    <div>
      <h1 className="text-3xl text-center md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Precios</h1>
      <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6 rounded-full"></div>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        {pricingPlans.map((plan, index) => (
          <PriceCard key={index} title={plan.title} price={plan.price} features={plan.features} />
        ))}
      </div>
    </div>
  );
};

export default Precios;



