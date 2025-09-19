import Router from 'express'
import { addSkill, deleteSkill, getSkills, updateSkill } from '../controllers/skill.controller.js'
import {verifyJWT} from '../middleware/verifyJWT.js'
import { upload } from '../utils/multer.js' 
const router= Router()

router.route('/').get(getSkills)
router.route('/add').post(verifyJWT, upload.single('image'), addSkill)
router.route('/:id').put(verifyJWT, upload.single('image'),updateSkill)

router.route('/:id').delete(verifyJWT, deleteSkill)




export default router 