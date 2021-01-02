export default interface IPhoto {
  id: string;
  alt_description: string;
  description: string;
  urls: {
    raw: string
  };
  user: {
    name: string;
    links: {
      html: string;
    };
  };
  width: number;
  height: number;
  blur_hash: string;
}
