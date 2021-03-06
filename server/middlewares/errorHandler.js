function errorHandler(err, req, res, next) {
  let status = err.status || 500
  let msg = ''
  console.log(err)
  switch(err.name) {
    case 'SequelizeValidationError':
      status = 400
      msg = err.errors.map(el => el.message).join(' | ')
      break;
    case 'SequelizeUniqueConstraintError':
      status = 400
      msg = err.errors[0].message
      break;
    default:

      msg += err.msg
      status = err.status
      break;
  }
  res.status(500).json({msg})
}

module.exports = errorHandler