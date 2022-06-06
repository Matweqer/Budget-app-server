import { Router } from 'express';
import { BudgetController } from '../controllers';

const budgetRouter = Router();

budgetRouter.get(
    '/getNotes',
    async function(req,res) {
      const notes = await BudgetController.getNotes();
      res.json(notes)
    },
)

budgetRouter.post(
    '/addNote',
    async function(req,res) {
        const note = await BudgetController.addNote(req.body);
        res.json(note)
    },
)

budgetRouter.delete(
    '/deleteNote',
    async function(req,res) {
        const note = await BudgetController.deleteNote(req.body);
        res.json(note)
    },
)

budgetRouter.patch(
    '/updateNote',
    async function(req,res) {
        const note = await BudgetController.patchNote(req.body);
        res.json(note)
    },
)

budgetRouter.get(
    '/getStats',
    async function(req,res) {
        const stats = await BudgetController.getStats();
        res.json(stats)
    },
)

export { budgetRouter };
