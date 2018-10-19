var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/login' ,{  useNewUrlParser: true }, () => {
    console.log("DB is connected");
})
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var con ;
const userSchema = new Schema({
    author:ObjectId,
    userid: { type: Number, required: true },
    password:{type:Number},
    name:{type:String},
    age:{type:Number},
});
const userSchema2 = new Schema({
    author:ObjectId,
    userid: { type: String, required: true },
    title:{type:String},
    content:{type:String},
});
 
//var insertModel =module.exports= mongoose.model('datas',userSchema);


// we need to create a model using it
var Login =module.exports=  mongoose.model('datas', userSchema);
var Port =module.exports=  mongoose.model('portals', userSchema2);
module.exports.getEmp=function(callback,limits){
    
    Login.findOne(limits).exec(callback);
  
}
module.exports.getData=function(callback,limits){
    
    Port.find(limits).exec(callback);
  
}
module.exports.insertdata=function(callback,limits){
    const insertObj = new Port({userid:limits.userid,title:limits.title,content:limits.content});  
   
    var saveResponse =function(err){
        if(err){
        console.log("save Failed"+err);
        }else{
            console.log("save Succcess");
        //callback;
        }
    };
    
    insertObj.save(saveResponse);
   
   
    callback();
  
}
module.exports.insertEmp=function(callback,limits){
    //Login.findOne({userid:limits.userid}).exec(callback);
    console.log(limits);
    
    const insertObj = new Login({userid:limits.userid,password:limits.pass,name:limits.name,age:limits.age});  
    var echoRecords =function(err,log){
        console.log("Total Records Found:"+log.length);
        for(var i=0;i<log.length;i++){
            console.log((i+1)+"\t"+log[i]._id+"\t"+log[i].userid+"\t"+log[i].name);
        }
    };
     
    var saveResponse =function(err){
        if(err){
        console.log("save Failed");
        }else{
            console.log("save Succcess");
        //callback;
        }
    };
    insertObj.save(saveResponse);
    //Login.findOne({userid:limits.userid}).
    callback();
}
module.exports.deletedata=function(callback,limits){
    console.log("delete::::"+limits);
Port.remove(limits,callback);
//Port.find().exec(callback);
}