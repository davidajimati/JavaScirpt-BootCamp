const prom = new Promise((resolve, reject) => {
  let fileLoaded = false;

  if (fileLoaded) {
    resolve("File Loaded");
  } else {
    reject("File not loaded");
  }
});

prom.then(value => console.log(value))
    .catch(error => console.log(error));
