export interface IImage {
  id: string,
  name: string,
  address: string[],
  phone: string,
  sector: keyof typeof sector, //normal-combustible-supermercado
  hasPromo: boolean,
}

enum sector {
  'normal',
  'combustible',
  'supermercado'
}