const express = require('express')
const chalk=require('chalk')
const cors=require('cors')
const app = express()
const port = 3000

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
  res.json([
    {
      name:'Mango'
    },
    {
      name:'Apple'
    },
    {
      name:'Guava'
    },
    {
      name:'Cherry'
    },
    {
      name:'Orange'
    }
  ])
})

app.listen(port, () => {
  console.log(chalk.blue(`Example app listening on http://localhost:${port}`))
})