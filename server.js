let express=require('express')
let mongoose=require('mongoose')
let Use=require('./models/user')
const { render } = require('ejs')

let serveur=express()
serveur.listen(3000)
let code_url='mongodb+srv://tanhaxelkevin:abidasproduction@cluster0.xe6gize.mongodb.net/api-res?retryWrites=true&w=majority'

 //CONNECTION A LA BASE DE DONNE CONNECTION A LA BASE DE DONNE CONNECTION A LA BASE DE DONNEDONNE
//OENNECTION A LA BASE DE DONNE CONNECTION A LA BASE DE DONNE CONNECTION A LA BASE DE DONNEDONNE
mongoose.connect(code_url)
.then((result)=>{
console.log(result);
})
.catch((err)=>{

    console.log(err);
})

//MIDWAREE ET EJS MIDWAREE ET EJS MIDWAREE ET EJS MIDWAREE ET EJS MIDWAREE ET EJSMIDWAREE ET EJS
//MIDWAREE ET EJS MIDWAREE ET EJS MIDWAREE ET EJS MIDWAREE ET EJS MIDWAREE ET EJSMIDWAREE ET EJS
serveur.use(express.urlencoded({extended:true}))
serveur.use(express.static('public'))
serveur.set('view engine','ejs')


//DONNE ALEATOIREDONNE ALEATOIRE DONNE ALEATOIRE DONNE ALEATOIRE DONNE ALEATOIRE DONNE ALEATOIRE
//DONNE ALEATOIREDONNE ALEATOIRE DONNE ALEATOIRE DONNE ALEATOIRE DONNE ALEATOIRE DONNE ALEATOIRE
//DONNE ALEATOIREDONNE ALEATOIRE DONNE ALEATOIRE DONNE ALEATOIRE DONNE ALEATOIRE DONNE ALEATOIRE
serveur.get('/donnee',(req,res)=>{
    let blog=new Use(
        {
         noms:'abidas',   
         prenoms:'axel',
         age:10  
        }
    )
   blog.save()
   .then((result)=>{
       res.send(result)
   })
   .catch((err)=>{
       console.log(err)
   })
   })
   


//ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUILACCEUILACCEUIL 
//ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUIL ACCEUILACCEUILACCEUIL 
serveur.get('/',(req,res)=>{
    res.render('acceuil')
})

//IDENTIFIANT IDENTIFIANT IDENTIFIANT IDENTIFIANT IDENTIFIANT IDENTIFIANT IDENTIFIANTIDENTIFIANT
//IDENTIFIANT IDENTIFIANT IDENTIFIANT IDENTIFIANT IDENTIFIANT IDENTIFIANT IDENTIFIANTIDENTIFIANT
serveur.get('/ident',(req,res)=>{
Use.find()
.then((result)=>{
 res.render(identifiant,{blog:result})
})
.catch((err)=>{
console.log(err)
})
})


//gerer IDENTIFIANT gerer IDENTIFIANT gerer IDENTIFIANT
serveur.get('/blogs/:id',(req,res)=>{
  let id=req.params.id
  Use.find(id)
  .then((result)=>{
    res.render('idee',{blog:result})
  }) 
   .catch((err)=>{console.log(err);})
})
// SUPPRESSION IDENTIFIANT SSSSSSSSSSSSSSSSSSSSSSSSSSS
serveur.delete('/blogs/:id',(req,res)=>{
let id=req.params.id
Use.findByIdAndDelete(id)
.then((result)=>{
   res.json({redirect:"/blogs"})
})
.catch((err)=>{console.log(err);})

})
//FORMULAIREEEEEEEEEEEEE FORMULAIREEEEEEEEEEEEE FORMULAIREEEEEEEEEEEEE FORMULAIREEEEEEEEEEEEE
//FORMULAIREEEEEEEEEEEEE FORMULAIREEEEEEEEEEEEE FORMULAIREEEEEEEEEEEEE FORMULAIREEEEEEEEEEEEE
//FORMULAIREEEEEEEEEEEEE FORMULAIREEEEEEEEEEEEE FORMULAIREEEEEEEEEEEEE FORMULAIREEEEEEEEEEEEE
serveur.get('/form',(req,res)=>{ 
    let btn="envoyer"  
    res.render('formulaire',{boutton:btn})
})


serveur.post('/form',(req,res)=>{
 let rec=new Use(req.body)
 rec.save()
 .then((result)=>{
    res.redirect('/')
 })
 .catch((err)=>{
  console.log(err)
 })
   
})