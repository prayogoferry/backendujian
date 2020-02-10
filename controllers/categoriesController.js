const db = require('../connections/index');

module.exports = {
    getCategory : (req, res) => {
        var nama = req.query.nama ? req.query.nama : ''
        var sql = `SELECT * FROM categories WHERE nama LIKE '%${nama}%';`   
        db.query(sql, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)     
            }
            res.status(200).send(results)
        })
    },

    getCategoryById : (req, res) => {
        var sql = `SELECT * FROM categories WHERE id = ${req.params.id};`
        
        db.query(sql, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)           
            } 
            res.status(200).send(results)
        })
    },

    deleteCategory : (req, res) => {
        var sql = `DELETE FROM categories 
                    WHERE id = ${req.params.id};`
        
        
        db.query(sql, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)
            }
            res.status(200).send("you are success")
        })
    },

    addCategory : (req, res) =>  {
        var addcategory = req.body
    
        if (addcategory) {
            var sql = `INSERT INTO categories SET ?;`      
            db.query(sql, addcategory, (err, results)=>{
                if(err) {
                    console.log(err);
                    return res.status(500).send(err)                   
                }
                
                res.status(200).send("Success")
            })
    
        } else {
            res.status(500).send('isi dulu categorynya')
        }
    },

    editCategory: (req,res) => {
        var updatecategory = req.body
        var sql = `UPDATE categories SET ? WHERE id = ${req.params.id};`
    
        console.log(updatecategory);
        
        db.query(sql, updatecategory, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)
                        
            }
            
            
            res.status(200).send('kamu sukses')
        })
    }
}