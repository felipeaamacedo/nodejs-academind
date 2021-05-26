const express = require("express")

const app = express()

/*
  app.use("/", (req,res,next)=>{
    console.log("I'm in the middleware!")
    next()
  })

  app.use((req,res,next)=>{
    console.log("This is the next middleware!")
  })

*/

app.use("/users", (req,res,next)=>{
  res.send(
    `<h1>This are the users we have:</h1>
    <ul>
      <li>Felipe</li>
      <li>Julio</li>
      <li>Alexandre</li>
      <li>Diogo</li>
    </ul>`
  )
})

app.use("/", (req,res,next)=>{
  res.send("<h1>This is the main page!</h1>")
})

app.listen(3000)