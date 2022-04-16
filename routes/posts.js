const { authVerify } = require('../middlewares/verifyToken');

const router = require('express').Router();

router.get('/', authVerify,(req, res) => {
  res.json({
    posts: {
      title: "Somewhere in the universe",
      lineCount: 56,
    }
  })

});

module.exports = router;