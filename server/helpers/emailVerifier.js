const Verifier = require('email-verifier')

let verifier = new Verifier("at_P3fczF7jlGX0dDgbcDSB5SEBKe3jh");
// let verifier = new Verifier(process.env.EVKEY);

const verifyEmail = email => {
  return new Promise((resolve, reject) => {
    verifier.verify(email, (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = verifyEmail
