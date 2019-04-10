const Box = require('../models/Box');

class BoxController {
    async store(req, res) {        
        const box = await Box.create(req.body);
        return res.json(box);
    }
    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options:{ sort:{ createdAt: -1 } }
        });
        return res.json(box);
    }
}

module.exports = new BoxController();
//PAROU EM 57 MIN DO VÍDEO!