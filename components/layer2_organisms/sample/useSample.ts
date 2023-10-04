// morecules配下のコンポーネントの傍にhookを置くのは悪くないと思う一方で
// 個別のhookは別の場所に置いた方が良いんじゃないかという気持ちもなくはない

// レイアウトのstoryを作るうえでデータフェッチ部分はmockを使いたい
// どうやったらいい感じになるかはなんもわかっていない
export type UseSampleProps = {
  id: number;
};

export type UseSampleData = {
  name: string;
};

const useSample = ({ id }: UseSampleProps): UseSampleData => {
  // データフェッチをしている雰囲気を出しておく
  const getName = `name${id}`;
  return { name: getName };
};

export default useSample;
