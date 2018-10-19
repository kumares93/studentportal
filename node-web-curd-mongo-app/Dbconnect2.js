var mongoose=require('mongoose');
//backend
var Schema = mongoose.Schema;
var con ;
var userSchema= new Schema({
    userid: {type:Number,required:true,index:true},                  
    title:{type:String, required:true,trim:true},
    content:{type:String, required:true,trim:true},          // required:true, trim:true,index:true,unique:true},
});
 
var userModel = mongoose.model('portal',userSchema);
var thana = new userModel({userid:101,title:'What is React?',content:'React is a javascript library which uses JSX expressions'});
var mark = new userModel({userid:102,title:'What is Angular?',content:'Angular is a two way data binding which uses MVC model'});

var cb = function(err){

    if(!err){
        console.log("connection opened \t"+con.readyState);
    }else{
        console.log(err);
    }
};
 
mongoose.connect("mongodb://localhost/login",cb);
con = mongoose.connection;
  
var echoRecords =function(err,log){
    console.log("Total Records Found:"+log.length);
    for(var i=0;i<log.length;i++){
        console.log((i+1)+"\t"+log[i]._id+"\t"+log[i].userid+"\t"+log[i].title);
    }
};
 
var saveResponse =function(err){
    if(err){
    console.log("save Failed");
    }else{
    console.log("save success");
    }
};
 
//thana.save(saveResponse);
//mark.save(saveResponse);
 
//thana.find(echoRecords);
userModel.find({userid:101},echoRecords);

userModel.find({userid:102},echoRecords);
