import { Router } from 'express';
import { BudgetController } from '../controllers';
import { wrap } from '../utils'


const budgetRouter = Router();

budgetRouter.get(
    '/getNotes',
    wrap(async function(req,res) {
        const notes = await BudgetController.getNotes();
        res.json(notes)
    })
)

budgetRouter.post(
    '/addNote',
    wrap(async function(req,res) {
        console.log(req.body);
        const note = await BudgetController.addNote(req.body);
        res.json(note)
    })
)

budgetRouter.delete(
    '/deleteNote',
    wrap(async function(req,res) {
        const note = await BudgetController.deleteNote(req.body);
        res.json(note)
    })

)

budgetRouter.patch(
    '/updateNote',
    wrap(async function(req,res) {
        const note = await BudgetController.patchNote(req.body);
        res.json(note)
    })
)

budgetRouter.get(
    '/getStats',
    wrap(async function(req,res) {
        const stats = await BudgetController.getStats();
        res.json(stats)
    })
)

budgetRouter.get(
    '/getByProp',
    wrap(async function(req,res) {
        const notes = await BudgetController.getByProp(req.query);
        res.json(notes)
    })
)

budgetRouter.get(
    '/getSortedByField',
    wrap(async function(req,res) {
        const notes = await BudgetController.getSortedByField(req.query);
        res.json(notes)
    })
)

export { budgetRouter };
