

var fs = require('fs');
var parse = require('csv-parse');
var arquivo = require('./kafka.json');
 
// Kafka configuration
var kafka = require('kafka-node')
var Producer = kafka.Producer
// instantiate client with as connectstring host:port for  the ZooKeeper for the Kafka cluster
var client = new kafka.Client("192.168.0.63:2181/")
 
// name of the topic to produce to
var topic = "topico1";
 
    KeyedMessage = kafka.KeyedMessage,
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message'),
    ProducerReady = false ;
 
producer.on('ready', function () {
    console.log("Producer is ready");
    ProducerReady = true;

    KeyedMessage = kafka.KeyedMessage;

    // setTimeout(() => {
      for(i=0;i<arquivo.length;i++){
            KM = new KeyedMessage("Teste:", JSON.stringify(arquivo[i])),
            payloads = [
                { topic: topic, messages: KM, partition: 0 },
            ];
            if (ProducerReady) {
            producer.send(payloads, function (err, data) {
                console.log("Data: ",data);
            });
            } else {
                // the exception handling can be improved, for example schedule this message to be tried again later on
                console.error("sorry, CountryProducer is not ready yet, failed to produce message to Kafka.");
            }
        }
    // }, 1000);

        
});
  
producer.on('error', function (err) {
  console.error("Problem with producing Kafka message "+err);
})
 
 