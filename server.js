const express = require('express');
const Datastore = require('nedb');

const app = express();

app.use(express.json({limit: 'lmb'}));

const database = new Datastore ('database.db');
database.loadDatabase();

app.post('/api/addFlight', (request, response ) => {
  const data =request.body;
  database.insert(data)
  console.log(database)
  response.json({
    status:'success',
    content:data
})
});

app.post('/api/addCustomer', (request, response ) => {

  const data = request.body;
  database['customers'].insert(data);
  console.log(database);
  response.json({
    status: 'success',
    content: CustomerList
  })

  app.get('/api/getCustomers', (request, response) =>
  {
    console.log("i got a request")
    response = {chuj: "xD"}
    
  })


  
})




const port = 5000;

app.listen(port, () => `Server running on port ${port}`)