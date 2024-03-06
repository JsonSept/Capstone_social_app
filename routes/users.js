import express from 'express'
import controller from '../controller/users.js'
const router = express.Router()

router
    .route('/')
            .get(controller.getUsers)
            .post(controller.getPost)
         

router
    .route('/:id')
            .delete(controller.getDelete )
            .patch(controller.getPatc)
            .get(controller.getUser)

export default router