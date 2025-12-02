const express = require('express');
const router = express.Router();
const dogsController = require('../controllers/dogsController');
const validate = require('../middlewares/validate');
const { dogSchema } = require('../schemas/dogSchema');

// 강아지 리스트 조회
router.get('/', dogsController.getDogs);
// 강아지 추가
router.post('/', validate(dogSchema), dogsController.addDog);
// 강아지 삭제
router.delete('/:id', dogsController.deleteDog);
// 강아지 수정
router.put('/:id', validate(dogSchema), dogsController.updateDog);

module.exports = router;
