
var express = require('express');
var router = express.Router();
router.use(express.urlencoded())


/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.items= req.session.items || [];
  items = req.session.items ;
  res.render('todo', { title: 'To Do' ,tasks:items});
});

router.post('/add',(req,res,next)=>{
  let tarea = req.body.item
  let items=req.session.items;
  const ids=items.map(item=>{
    return item.idT
  })
  let maxid;
  if(ids.length==0){
    maxid=1;
  }else{
    maxid = Math.max(...ids)+1
  }
  let newItem = {idT:maxid,task:tarea}
  req.session.items.push(newItem)
  res.redirect('/todo')
})

router.delete('/delete/:idTask',(req,res,next)=>{
    
})

module.exports = router;