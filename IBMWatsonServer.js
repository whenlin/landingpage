var watson = require('watson-developer-cloud');
var fs = require('fs');

var visual_recognition = watson.visual_recognition({
  api_key: '8d7aced8efa9ce11cca985d203dce5989cc20148',
  version: 'v3',
  version_date: '2016-05-20'
});

var params = {
  images_file: fs.createReadStream('sickeye.jpg'),
  classifier_id : ['default']
};

visual_recognition.getClassifier({
  classifier_id: 'Untitled_683728389' },
  function(err, response) {
   if (err)
    console.log(err);
   else
    console.log(JSON.stringify(response, null, 2));
  }
);

visual_recognition.classify(params, function(err, res) {
  if (err)
    console.log(err);
  else{
    var objString = JSON.stringify(res, null, 2)
    var obj = JSON.parse(objString)
    
    document.getElementById('#message').innerHTML = obj.class + ", " + obj.score
    
  }
});

function parseJSON(){
  
}
