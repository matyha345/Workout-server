import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import {
	createNewExercise,
	deleteExercise,
	getExercises,
	updateExercise
} from './exercise.controller.js'
import { createNewExerciseLog } from './log/exercise-log.controller.js'
import { getExerciseLog } from './log/get-exercise-log.controller.js'
import {
	completeExerciseLog,
	updateExerciseLogTime
} from './log/update-exercise-log.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewExercise).get(protect, getExercises)

router
	.route('/:id')
	.put(protect, updateExercise)
	.delete(protect, deleteExercise)

router
	.route('/log/:id')
	.post(protect, createNewExerciseLog)
	.get(protect, getExerciseLog)

router.route('/log/time/:id').put(protect, updateExerciseLogTime)

router.route('/log/complete/:id').patch(protect, completeExerciseLog)

export default router
