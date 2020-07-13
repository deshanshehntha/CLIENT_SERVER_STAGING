const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const router = express.Router();

const UserStore = require("./clientDataStore");
const ElectionContractDataStore = require("./electionContractDataStore");

router.use(bodyParser.json());
router.use(cors());

router.get("/", (req, res) => {
    res.send({ response: "I am alive" }).status(200);
});

router.get("/getActiveUsers", (req, res) => {
    res.send({ response:  UserStore.get()}).status(200);
});


router.get("/getContracts", (req, res) => {
    res.send({ response:  ElectionContractDataStore.getAll()}).status(200);
});

router.get("/getContract/:id", (req, res) => {
    console.log(req.params.id);
    console.log(ElectionContractDataStore.getContractById(req.params.id))
    res.send({ response:  ElectionContractDataStore.getContractById(req.params.id)}).status(200);

});



router.get("/getCluster", (req, res) => {
    res.send( global.globalString).status(200);
});
module.exports = router;


