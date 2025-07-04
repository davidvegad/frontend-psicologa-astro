import React, { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const PaymentButton = ({ bookSlug, publicKey }) => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.PUBLIC_API_URL;

  initMercadoPago(publicKey, { locale: 'es-PE' });

  const createPreference = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${apiUrl}/create-payment-preference/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug: bookSlug }),
      });

      if (!response.ok) {
        throw new Error('No se pudo crear la preferencia de pago.');
      }

      const data = await response.json();
      setPreferenceId(data.preference_id);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!preferenceId) {
    return (
      <button 
        onClick={createPreference} 
        disabled={isLoading}
        className="w-full bg-brand-primary text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:bg-gray-400"
      >
        {isLoading ? 'Cargando...' : 'Comprar Ahora'}
      </button>
    );
  }

  return (
    <Wallet 
      initialization={{ preferenceId: preferenceId }} 
      customization={{ texts:{ valueProp: 'smart_option' }}}
    />
  );
};

export default PaymentButton;
