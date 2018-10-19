var Login=require('../CustomModule/connectionQuery');

exports.dbconnect = function (req,res) {
    let userid=req.params.userid;
    let pass=req.params.pass;
    userid=Number(userid);
    pass=Number(pass);
    Login.getEmp(function(err, emp){
                //if(err) throw err
                console.log(userid);
                if(emp===null){
                res.json({error:"Userid or Passowrd mismatch "});
                }else if(pass!==emp.password) {res.json({error:"Userid or Passowrd mismatch "});}
                else{res.json({userid:emp.userid,name:emp.name,age:emp.age});
                }
    },{userid:userid});
}
exports.login = function (req,res) {
    console.log(req.body);
    const userid=Number(req.body.userid);
    const pass=Number(req.body.pass);
    console.log(userid,pass);
    Login.getEmp(function(err, emp){
        console.log(userid);
        if(emp===null){
        res.json({error:"Userid or Passowrd mismatch "});
        }else if(pass!==emp.password) {res.json({error:"Userid or Passowrd mismatch "});}
        else{res.json({userid:emp.userid,name:emp.name,age:emp.age});
        }
},{userid:userid});
}

exports.insert = function (req,res) {
    const userid=Number(req.params.userid);
    const pass=Number(req.params.pass);
    const name=req.params.name;
    const age=Number(req.params.age);
    Login.insertEmp(function(err, emp){
                if(err) throw err;
                res.json({report:"SuccessFully Updated "});
    },
    {userid:userid,pass:pass,name:name,age:age});
}
exports.postinsert = function (req,res) {
    const userid=Number(req.body.userid);
    const pass=Number(req.body.pass);
    const name=req.body.name;
    const age=Number(req.body.age);
    res.redirect(`/get/${userid}/${pass}/${name}/${age}`);
}

exports.getdata = function (req,res) {
    Login.getData(function(err, emp){
                //if(err) throw err
               // console.log(emp);
                res.json(emp);
    });
}
exports.putInsertData = function (req,res) {
    //console.log(req.body);
    const userid=(req.body.userid);
    const title=(req.body.title);
    const content=req.body.content;
    Login.insertdata(function(err, emp){
                if(err) { 
                    res.json("Something went wrong");
            }else{
                //console.log(emp);
                res.json("Successfully updated");
            }
    },{userid:userid,title:title,content:content});
}
exports.deleteContent = function (req,res) {
  //  console.log(req.body);
    Login.deletedata(function(err, emp){
                if(err) throw err
                Login.getData(function(err, emp){
                res.json(emp);
                });
    },req.body);
}