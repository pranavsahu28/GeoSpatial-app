// fileController.js
const multer = require('multer');
const File = require('../models/File');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single('file');

exports.uploadFile = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ msg: 'File upload failed', err });
    }
    const { filename, path } = req.file;
    const file = new File({ user: req.user.id, filename, path });
    await file.save();
    res.status(200).json({ msg: 'File uploaded successfully', file });
  });
};

exports.getFiles = async (req, res) => {
  try {
    const files = await File.find({ user: req.user.id });
    res.json(files);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
