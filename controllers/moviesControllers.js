const db = require('../connections/index')

module.exports={

    getMovie : (req, res) => {
        var nama = req.query.nama || ''
        var tahun = req.query.alamat ? req.query.tahun : ''
        
        var sql = `SELECT * FROM movies WHERE nama LIKE '%${nama}%'
                    AND tahun LIKE '%${tahun}%'`
        
        db.query(sql, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)
                        
            }
    
            res.status(200).send(results)
        })
    },

    getMovieById : (req, res) => {
        var sql = `SELECT * FROM movies WHERE id = ${req.params.id};`
        
        db.query(sql, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)
                        
            }
    
            res.status(200).send(results)
        })
    },

    deleteMovie : (req, res) => {
        var sql = `DELETE FROM movies WHERE id = ${req.params.id};`
        
        db.query(sql, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)           
            }
            res.status(200).send("Sukses Delete Movie")
        })
    },

    addMovie : (req, res) =>  {
        var addmovie = req.body
        console.log(movie)
    
        if (movie) {
            var sql = `INSERT INTO movies SET ?;`
        
            db.query(sql, addmovie, (err, results)=>{
                if(err) {
                    console.log(err);
                    return res.status(500).send(err)           
                }     
                res.status(200).send("Sukses tambah Movie")
            })
    
        } else {
            res.status(500).send('Tolong isi movie')
        }
    },

    editMovie : (req,res) => {
        var movieUpdate = req.body
        var sql = `UPDATE movies SET ?  WHERE id = ${req.params.id};`
    
        console.log(movieUpdate);
        
        db.query(sql, movieUpdate, (err, results)=>{
            if(err) {
                console.log(err);
                return res.status(500).send(err)
                        
            }
    
            res.status(200).send("Sukses Edit Movie")
        })
    }

}