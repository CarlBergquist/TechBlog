const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    const commentData = await Comment.findAll({})
    res.json(commentData)
})

router.get('/:id', async (req, res) => {
    const commentData = await Comment.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(commentData)
    })


router.post('/', withAuth, async (req, res) => {
    if (req.session) {
        const commentData = await Comment.create({
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                user_id: req.session.user_id,
            })
            res.json(commentData)
    }
});

module.exports = router;