//const express = require('express')
const {response} = require('express')

const userGet = (req, res) => {
    //localhost:8080/api/usuario/?q=hola&nombre=juanjo&pkey=123
    const query = req.query;
    res.json({
        "msj": "api- get",
        query
    })
}

const userPost = (req, res) => {
    const body = req.body;
    res.json({
        "msj": "api- post",
        body
    })
}

const userPut = (req, res) => {
    const id = req.params;
    res.json({
        "msj": "api- put",
        id
    })
}

const userDelete = (req, res) => {
    res.json({
        "msj": "api- delete"
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}