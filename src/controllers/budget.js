import {Budget} from "../models"

async function addNote({type, category, cost, subscription}) {
    try {
        return await Budget.create({
            type,
            category,
            cost,
            subscription
        })
    } catch (err) {
        console.log('ERROR')
        console.log(err);
    }
}

async function deleteNote({id}) {
    try {
        const note = await Budget.findOne({
            where: {
                id
            }
        })
        return (!note) ?
            {msg: 'no_note_in_base'} :
            await Budget.destroy({
                where: {
                    id
                },
            })
    } catch (err) {
        console.log('ERROR')
        console.log(err);
    }
}

async function getNotes() {
    try {
        const notes = await Budget.findAll()
        return (notes) ? notes : {msg: 'no_notes_in_base'}

    } catch (err) {
        console.log('ERROR')
        console.log(err);
    }
}

async function patchNote({id, type, category, cost, subscription}) {
    try {
        const note = await Budget.findOne({
            where: {
                id
            }
        })
        if (!note)
            return {msg: 'no_note_in_base'}
        else {
            return await note.update({
                type,
                category,
                cost,
                subscription
            })
        }
    } catch (err) {
        console.log('ERROR')
        console.log(err);
    }
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

export {
    addNote,
    deleteNote,
    getNotes,
    patchNote,
    getStats
};