// PLEASE DON'T change function name
Object.filter = (obj, predicate) =>
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

module.exports = function makeExchange(currency) {
  const constH = 50;
  const constQ = 25;
  const constD = 10;
  const constN = 5;
  const constP = 1;

  if (currency >= 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"}
  } else {
    const H = Math.floor(currency / constH);
    currency -= (constH*H);
    const Q = Math.floor(currency / constQ);
    currency -= (constQ*Q);
    const D = Math.floor(currency / constD);
    currency -= (constD*D);
    const N = Math.floor(currency / constN);
    currency -= (constN*N);
    const P = Math.floor(currency)

    return Object.filter({H,Q,D,N,P}, value => value > 0);
  }
}
