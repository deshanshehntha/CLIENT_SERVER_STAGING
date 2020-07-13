
class ElectionContractDataStore {

    _contracts = [];

    constructor() {
        this._contracts = [];
    }

    add(contract) {
        if(!this._contracts.includes(contract)) {
            console.log("new contract!")
            this._contracts.push(contract);
        }
    }

    getAll() {
        return this._contracts;
    }

    remove(socketId) {
        this._contracts = [];
    }

    getLength() {
        return this._contracts.length;
    }

    getContractById(id) {
        var found = this._contracts.find(function (element) {
            return element._contractId === id;
        });

        return found;
    }
}

const instance = new ElectionContractDataStore();

module.exports = instance;
