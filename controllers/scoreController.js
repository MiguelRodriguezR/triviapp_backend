const Score  = require('../models/Score')

exports.getScores = async (req, res) =>{
    try {
        const scores = await Score.find();
        res.json({ scores });
    } catch (error) {
        console.log(error);
        res.status(500).send('internal error')
    }
}

exports.setScore = async (req, res) =>{

    try {
        const score = new Score(req.body);
        score.save();   
        res.json(score);
    } catch (error) {
        console.log(error);
        res.status(500).send('internal error')
    }
}