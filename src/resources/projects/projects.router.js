import { Router } from 'express'
import controllers from './projects.controllers'

const router = Router()

// api/projects
router.route('/')
    .get(controllers.getOne)
    .get(controllers.getMany)
    .post(controllers.createOne)

// api/projects/:id
router.route('/:id')
    .get(controllers.getOne)
    .put(controllers.updateOne)
    .delete(controllers.removeOne)

export default router