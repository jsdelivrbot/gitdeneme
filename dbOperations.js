module.exports = {
    
    
    
    userdata : function(req, res){
        


        var pg = require('pg');
        
        const conString = 'postgres://meivxnuxakxqvi:e501dbd3feafa616c3d31c68cc2c51474064ac1aefdcf395838fb79da3812cca@ec2-54-83-203-198.compute-1.amazonaws.com:5432/d9q6ascc3tnn62';
        
        var client = new pg.Client(conString);
        client.connect();
        const data = req.body;
        
        
        
        data.forEach( function(_data){
            console.log(_data);
            var query = client.query("insert into user_data_(user_id, username, acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, type, ntrial, timestamp) " + "values ('" + _data.user_id+"','"+_data.username+"','"+_data.acc_x+"','"+_data.acc_y+"','"+_data.acc_z+"','"+_data.gyro_x+"','"+_data.gyro_y+"','"+_data.gyro_z+"','"+_data.type+"','"+_data.ntrial+"','"+_data.timestamp+"')");
        })
        res.sendStatus(200);
        /*while(data[i].user_id != null)
        {
      
            console.log(data[i].user_id);
            var query = client.query("insert into user_data_(user_id, username, acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, type, ntrial, timestamp) " + "values ('" + data[i].user_id+"','"+data[i].username+"','"+data[i].acc_x+"','"+data[i].acc_y+"','"+data[i].acc_z+"','"+data[i].gyro_x+"','"+data[i].gyro_y+"','"+data[i].gyro_z+"','"+data[i].type+"','"+data[i].ntrial+"','"+data[i].timestamp+"')");
            i++;
            res.sendStatus(200);
        }*/

    },

    
    ozan : function(req, res){
        
        
        
        var pg = require('pg');
        
        const conString = 'postgres://vxplnflglehgln:694f698cec8b80dcb36b4d9ac26862f3db4c11cf446f1ed03f31683b321a4e71@ec2-107-20-176-27.compute-1.amazonaws.com:5432/d96q4akdodelej';
        
        var client = new pg.Client(conString);
        client.connect();
        const data = req.body;
        
       
        
        data.forEach( function(_data){
                     console.log(_data);
                     var query = client.query("insert into user_data_(user_id, username, acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, type, ntrial, timestamp) " + "values ('" + _data.user_id+"','"+_data.username+"','"+_data.acc_x+"','"+_data.acc_y+"','"+_data.acc_z+"','"+_data.gyro_x+"','"+_data.gyro_y+"','"+_data.gyro_z+"','"+_data.type+"','"+_data.ntrial+"','"+_data.timestamp+"')");
                     })
        res.sendStatus(200);
        
    },
    
    nilay : function(req, res){
        
        
        
        var pg = require('pg');
        
        const conString = 'postgres://wzzicdxwkhimhx:c19c50ded70bf03d70babea7ca9c6509355b72bfdb71c907144ba8be61fecccb@ec2-54-83-23-91.compute-1.amazonaws.com:5432/dnm47itvr0eeg';
        
        var client = new pg.Client(conString);
        client.connect();
        const data = req.body;
        
        
        
        data.forEach( function(_data){
                     console.log(_data);
                     var query = client.query("insert into user_data_(user_id, username, acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, type, ntrial, timestamp) " + "values ('" + _data.user_id+"','"+_data.username+"','"+_data.acc_x+"','"+_data.acc_y+"','"+_data.acc_z+"','"+_data.gyro_x+"','"+_data.gyro_y+"','"+_data.gyro_z+"','"+_data.type+"','"+_data.ntrial+"','"+_data.timestamp+"')");
                     })
        res.sendStatus(200);
        
    },
    
    gelsindatalar : function(req, res){
        
        
        var pg = require('pg');
        
        const conString = 'postgres://whgpqosblfoedy:4e605849ce1aaedf57e8261df5665378133442f07a72d8bff60e877065317180@ec2-54-204-45-43.compute-1.amazonaws.com:5432/drd7decuc9srm';
        
        var client = new pg.Client(conString);
        client.connect();
        const data = req.body;
        
        data.forEach( function(_data){
                     console.log(_data);
                     var query = client.query("insert into user_data_(user_id, username, acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, type, ntrial, timestamp) " + "values ('" + _data.user_id+"','"+_data.username+"','"+_data.acc_x+"','"+_data.acc_y+"','"+_data.acc_z+"','"+_data.gyro_x+"','"+_data.gyro_y+"','"+_data.gyro_z+"','"+_data.type+"','"+_data.ntrial+"','"+_data.timestamp+"')");
                     })
        res.sendStatus(200);
        
    }
};



