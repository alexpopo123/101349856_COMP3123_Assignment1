const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

app.get('/', async (req, res) => {
    try {
      const employees = await employeeModel.find();
      res.status(200).send(employees);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.post('/', async (req, res) => { 
    try {
      const employee = new employeeModel(req.body);
      await employee.save();
      res.status(200).send(employee);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.get('/:id', async (req, res) => {
    try {
      const employee = await employeeModel.findById(req.params.id)
      res.status(200).send(employee)
    } catch (err) {
      res.status(500).send(err)
    }
});

app.put('/:id', async (req, res) => {
    try {
      const updatedEmployee = await employeeModel.findByIdAndUpdate(req.params.id, req.body)
      const ne = await updatedEmployee.save()
      res.status(200).send(ne)
    } catch (err) {
      res.status(500).send(err)
    }
});

app.delete('/', async (req, res) => {
    try {
      const employee = await employeeModel.findByIdAndDelete(req.query.id)
  
      if (!employee){
        res.status(404).send("No employee found")
      }
      res.status(204).send(employee)
    } catch (err) {
      res.status(500).send(err)
    }
});

module.exports = app