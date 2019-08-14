const express = require('express');
const Datastore = require('nedb');

const app = express();

app.use(express.json({ limit: '1mb' }));

const Database = new Datastore('Database.db');
Database.loadDatabase();


app.post('/api/addFlight', (request, response) => {
  let data = request.body;
  data['Type'] = "Flight"
  Database.insert(data)
  response.json({

    data: data
  }
  )
});



app.post('/api/addCustomer', (request, response) => {
  let data = request.body;
  data['Type'] = "Customer"
  Database.insert(data)
  response.json({
    data: data
  })
})


app.get('/api/getCustomers', (request, response) => {
  Database.find({Type: "Customer"}, (err, data) => {

    response.json(data)
  })


})

app.get('/api/getFlights', (request, response) => {
  Database.find({Type: "Flight"}, (err, data) => {
    response.json(data)
  })
})



const port = 5000;

app.listen(port, () => `Server running on port ${port}`)