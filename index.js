web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":true,"inputs":[{"name":"machine","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"machineList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"machine","type":"bytes32"}],"name":"voteForMachine","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"machine","type":"bytes32"}],"name":"validMachine","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"machineNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
VotingContract = web3.eth.contract(abi);
contractInstance = VotingContract.at('0x2d2a4183f3f7139d89be3bcdfb140fd76b8653a6');
machines = {"Mac": "machine-1", "Linux": "machine-2", "Win": "machine-3"}

function voteForMachine(machine) {
  machineName = $("#machine").val();
  try {
    contractInstance.voteForMachine(machineName, {from: web3.eth.accounts[0]}, function() {
      let div_id = machines[machineName];
      $("#"+div_id).html(contractInstance.totalVotesFor.call(machineName).toString());
    });
  } catch (err) {
  }
}

$(document).ready(function() {
  machineNames = Object.keys(machines);
  for (var i = 0; i < machineNames.length; i++) {
    let name = machineNames[i];
    let val = contractInstance.totalVotesFor.call(name).toString()
    $("#"+machines[name]).html(val);
  }
});