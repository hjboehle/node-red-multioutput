module.exports = function (RED) {
    function MultiOutputNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.outputs = config.outputs || 1;
        node.on('input', function (msg) {
            var messages = [];
            msg1 = msg.payload.toLowerCase();
            msg2 = this.outputs;
            //msg.payload = [messages[0], messages[1]];
            //node.log(", outputs: " + this.outputs);
            node.send([{ payload: msg1 }, { payload: msg2 }]);
        });
    }
    RED.nodes.registerType("multi-o", MultiOutputNode);
};
 