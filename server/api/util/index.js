module.exports = {
  /* Catches Promise rejections and passes it along to handleErr */
  catchErr: fn => (req, res, next) => fn(req, res, next).catch(next),

  /* Error handler that displays full details while in dev mode */
  handleErr: (err, req, res, next) => {
    const error = {
      status: err.status || 500,
      message: `🚫 ${err.message}`,
      stack: err.stack || ''
    }
    res.status(error.status).json(error)
  }
}