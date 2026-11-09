// Datos de la empresa en un solo lugar. Los campos vacíos no se muestran.
export const site = {
  name: 'Serviproma Energy C.A.',
  shortName: 'Serviproma Energy',
  url: 'https://servipromaenergy.com',
  email: 'admin@servipromaenergy.com',
  phone: '+58 412 725 1017',
  phoneHref: 'tel:+584127251017',
  whatsappHref: 'https://wa.me/584127251017',
  // Pendiente de entrega por el cliente (RIF, domicilio fiscal, sede).
  legal: { rif: '', address: '' },
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
};
