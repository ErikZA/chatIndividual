var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://localhost:27017/chatIndividual', { useNewUrlParser: true },
    function (err, conn) {
        if (err) return console.log('Não conectou ao banco' + err);
        global.db = conn.db('chatIndividual');
    });

function saveUser(name, lastName, passWord, callback) {
    global.db.collection('user').insert({ name, lastName, passWord }, function (err, result) {
        if (err) return console.log("algo deu errado" + err);
        callback();
    });
}

function getUser(name, callback) {
    global.db.collection('user').find({name: name}, $or ,{lastName: name}).pretty(function (err, docs) {
        if (err) return console.log("algo deu errado" + err);
        callback(docs);
    });
}
function chekUser(logName, logLastName, callback) {
    global.db.collection('user').find({ name: logName, lastName: logLastName }).count(function (err, docs) {
        if (err) return console.log("algo deu errado" + err);
        //console.log(docs + "blblblbl")
        callback(docs);

    });
}

function chekPasswordUser(logName, logLastName, logPassword, callback) {
    global.db.collection('user').find({ name: logName, lastName: logLastName, passWord: logPassword }).count(function (err, docs) {
        if (err) return console.log("algo deu errado" + err);
        console.log(docs + 'aboroas'+logName +" "+ logLastName+logPassword)
        callback(docs);
    });
}

function exitChat(callback){
    
}

module.exports = { saveUser, getUser, chekUser, chekPasswordUser, exitChat }

