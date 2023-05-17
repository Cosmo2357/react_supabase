import bcrypt from 'bcrypt';
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';



export const myFunc = () => {
  console.log('hello world This is my Func');

  bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {

    bcrypt.compare(myPlaintextPassword, hash, (err, result) => {
      console.log(result);
    });

    bcrypt.compare(myPlaintextPassword, hash).then((result) => {
      console.log('then', result);
    });

    bcrypt.compare(someOtherPlaintextPassword, hash, (err, result) => {
      console.log(result);
    });
  });

}

