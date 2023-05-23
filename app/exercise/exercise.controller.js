import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

// @desc    Create new exercise
// @route 	POST /api/exercises
// @access  Private
export const createNewExercise = asyncHandler(async (req, res) => {
	const { name, times, iconPath } = req.body

	const exercise = await prisma.exercise.create({
		data: {
			name,
			times,
			iconPath
		}
	})

	res.json(exercise)
})

// @desc    Update exercise
// @route 	PUT /api/exercises/:id
// @access  Private
export const updateExercise = asyncHandler(async (req, res) => {
	const { name, times, iconPath } = req.body

	try {
		const exercise = await prisma.exercise.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				times,
				iconPath
			}
		})

		res.json(exercise)
	} catch (error) {
		res.status(404)
		throw new Error('Exercise not found!')
	}
})

// @desc    Delete exercise
// @route 	DELETE /api/exercises/:id
// @access  Private
export const deleteExercise = asyncHandler(async (req, res) => {
	try {
		const exercise = await prisma.exercise.delete({
			where: {
				id: +req.params.id
			}
		})

		res.json({ message: 'Exercise deleted!' })
	} catch (error) {
		res.status(404)
		throw new Error('Exercise not found!')
	}
})

// @desc    Get exercises
// @route   GET /api/exercises
// @access  Private
export const getExercises = asyncHandler(async (req, res) => {
	const exercises = await prisma.exercise.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	})
	res.json(exercises)
})
