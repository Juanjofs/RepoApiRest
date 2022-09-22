const { Router } = require("express");
const { userGet } = require("../controllers/usercontroller");
const { userPost } = require("../controllers/usercontroller");
const { userPut } = require("../controllers/usercontroller");
const { userDelete } = require("../controllers/usercontroller");
const router = Router();

router.get('/', userGet)
router.post('/', userPost)
router.put('/:id', userPut)
router.delete('/', userDelete)

module.exports = router;