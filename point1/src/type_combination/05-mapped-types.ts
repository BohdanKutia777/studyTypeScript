type PcBrand = {
  name: string;
  country: string;
  createdAt: Date;
};

type WellKnownBrands =
  | 'apple'
  | 'lenovo'
  | 'hp'
  | 'dell'
  | 'microsoft'
  | 'huawei';

type MyRecord = {
  [BrandKey in WellKnownBrands]?: PcBrand;
};

const brandRecord: MyRecord = {
  apple: { country: 'USA', createdAt: new Date(), name: 'Apple' },
};
function printCatalog(pcCatalog: MyRecord) {
  console.log(pcCatalog.dell?.country);
}

type PartOfWindow = {
  [Key in 'document' | 'screen' | 'navigator']?: Window[Key];
};

const p: PartOfWindow = {
  screen: window.screen,
};

export {};
