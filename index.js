module.exports = () => {
  Promise.resolve()
   .then(() => console.log('create-api-component'))
   .catch(err => {
     console.log('Fail!');
     console.error(err)
   });
};
