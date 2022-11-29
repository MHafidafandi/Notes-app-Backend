const {addNoteHandler,getAllNotesHandler,getNoteByHandler,editNoteByIdHandler,deleteNoteByHandler} = require('./Handler')
const Routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method:'GET',
    path:'/notes',
    handler:getAllNotesHandler,
  },
  {
    method:'GET',
    path:'/notes/{id}',
    handler:getNoteByHandler
  },
  {
    method:'PUT',
    path:'/notes/{id}',
    handler:editNoteByIdHandler
  },
  {
    method:'DELETE',
    path:'/notes/{id}',
    handler:deleteNoteByHandler
  },

];
module.exports = Routes;