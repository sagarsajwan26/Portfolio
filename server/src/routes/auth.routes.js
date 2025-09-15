import Router from 'express'
import { loginUser, logoutUser, registerUser } from '../controllers/auth.controller.js'

const router= Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)

export default router 