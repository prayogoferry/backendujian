const db = require('../connections/index');

module.exports = {
    getMoveCat: (req,res) => {
        var sql = `SELECT m.nama AS namaMovie, c.nama AS namaCategory FROM movcat mc
                    JOIN movies m ON mc.movieId = m.id
                    JOIN categories c ON mc.CategoryId = c.id;`
        
        db.query(sql, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)
                        
            }
    
            res.status(200).send("kamu sukses")
        })
    },

    deleteMoveCat : (req,res) => {
         var sql = `DELETE FROM movcat 
                    WHERE id = ${req.params.id};`
        
        db.query(sql, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)
                        
            }
    
            res.status(200).send(" MovCat sukses didelete")
        })
    },

    addMoveCat : (req,res) => {
        var movcat = req.body
        
        if (movcat) {
            var sql = `INSERT INTO movcat SET ?;`
        
            db.query(sql, movcat, (err, results)=>{
                if(err) {
                    console.log(err);
                    return res.status(500).send(err)
                            
                }
        
                res.status(200).send("Sukses nambah movCat")
            })
    
        } else {
            res.status(500).send('di isi sekk')
        }
    }


}