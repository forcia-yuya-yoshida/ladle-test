// morecules配下のコンポーネントの傍にhookを置くのは悪くないと思う一方で
// 個別のhookは別の場所に置いた方が良いんじゃないかという気持ちもなくはない

const useSample = () => {
  // データフェッチをしている雰囲気を出しておく
  const getName = "name";
  return { name: getName };
};

export default useSample;
