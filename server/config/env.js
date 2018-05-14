module.exports = {
  db: process.env.DATABASE || 'mongodb://14mbd4:whatsonotBoTToMEnd@ds215370.mlab.com:15370/lambda_notes',
  port: process.env.PORT || 8888,
  secret: process.env.JWT_SECRET || 'notarealsecretkey'
}