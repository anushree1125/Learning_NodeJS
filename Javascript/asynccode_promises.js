const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });

  //callback function
  //console.log("timer is done");
}, 2000);
//async code-> doesn't execute immediately

console.log("hi"); // thi is synchronous code

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
