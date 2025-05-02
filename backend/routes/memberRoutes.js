const express = require('express');
const multer = require('multer');
const Member = require('../models/Member');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, process.env.UPLOADS_PATH),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  const { name, rollNumber, year, degree, aboutProject, hobbies, certificate, internship, aboutAim, email } = req.body;
  const image = req.file ? req.file.filename : '';

  const newMember = new Member({ name, rollNumber, year, degree, aboutProject, hobbies, certificate, internship, aboutAim, email, image });
  await newMember.save();
  res.json(newMember);
});

router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

router.get('/:id', async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

module.exports = router;
