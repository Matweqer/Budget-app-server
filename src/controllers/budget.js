import {Budget} from "../models"
import { BadRequest, NotFound } from 'http-errors'


async function addNote({ type, category, cost, subscription}) {

    if ( !type || !category || !cost ) throw new BadRequest('missing_field')
    return Budget.create({
        type,
        category,
        cost,
        subscription
    })
}

async function deleteNote({id}) {
    if ( !id ) throw new BadRequest('missing_field')
    const note = await Budget.findOne({
        where: {
            id
        }
    })
    if (!note) throw new NotFound('no_note_in_base')
    return note.destroy()
}

async function getNotes() {
    return Budget.findAll()
}

async function patchNote({id, type, category, cost, subscription}) {
    if ( !id || !type || !category || !cost ) throw new BadRequest('missing_field')
    const note = await Budget.findOne({
        where: {
            id
        }
    })
    if (!note) throw new NotFound('no_note_in_base')
    return await note.update({
        type,
        category,
        cost,
        subscription
    })
}

async function getStats() {
    const notes = await getNotes();
    let income = 0
    let outcome = 0
    if (notes['msg']) return {income, outcome}

    notes.forEach((note) => {
        if (note.type === 'income') {
            income += note.cost
        } else {
            outcome += note.cost
        }
    })
    return {
        income,
        outcome,
        difference: income - outcome
    }
}

async function getByProp(property) {
    const notes = await Budget.findAll({
        where: {
            ...property
        }
    })
    if (!notes) throw new NotFound('no_notes_in_base')
    return (notes)
}

async function getSortedByField({field, increasing}) {
    const notes = await Budget.findAll()
    if (!notes) throw new NotFound('no_notes_in_base')
    if (!increasing) {
        notes.sort((a, b) => a[field] > b[field] ? 1 : -1)
    } else {
        notes.sort((a, b) => a[field] < b[field] ? 1 : -1)
    }
    return notes
}


export {
    addNote,
    deleteNote,
    getNotes,
    patchNote,
    getStats,
    getByProp,
    getSortedByField
};