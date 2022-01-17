export interface SpideyContent {
  id: number;
  title: string;
  textObjects: [
    {
      type: string;
      language: string;
      text: string;
    }
  ];
  prices: [
    {
      type: string;
      price: number;
    }
  ];
  thumbnail: {
    path: string;
    extension: string;
  };
}
