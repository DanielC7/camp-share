axios
  .get(
    "https://api.coingecko.com/api/v3/simple/price?ids=binaryx,cyberdragon-gold&vs_currencies=usd"
  )
  .then((res) => {
    console.log("RESPONSE: ", res);
    console.log("RESPONSE DATA: ", res.data);
  });

// const res = axios.get("http://localhost:3000/campgrounds");
// console.log(res);
