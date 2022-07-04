const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll().then((genres) => {
            let response = {
                ok: true,
                meta: {},
                data: {}
            }
        }).catch(error => {
            console.log(error)
            let response = {
                ok: false

            }
        })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then((genre) => {

            });
    }

}

module.exports = genresController;