export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Create a fake request for testing purposes only...
export const fakeRequest = ms =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.ceil(Math.random() * 50);

      if (rnd > 30)
        reject({ message: 'There was something wrong in the server.' });
      resolve({
        data:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis iusto at est hic excepturi! Tempore sapiente delectus iste, excepturi deserunt, magnam mollitia doloremque corrupti suscipit nesciunt reiciendis, sed nulla aut.',
      });
    }, ms);
  });
