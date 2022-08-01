import express from 'express';
import mongoose from 'mongoose';

//import PostPegawai from '../models/postPegawai.js';
import PostTransaksi from '../models/postTransaksi.js';

const router = express.Router();

export const getPostst = async (req, res) => {
    try {
        const postTransaksi = await PostTransaksi.find();

        res.status(200).json(postTransaksi);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPostt = async (req, res) => {
    const { id: _id } = req.params;

    try {
        const postTransaksi = await PostTransaksi.findById(_id);

        res.status(200).json(postTransaksi);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPostt = async (req, res) => {
    //const { namaPegawai, usia, noPegawai, selectedFile } = req.body;

    //const newPostPegawai = new PostPegawai({ namaPegawai, usia, noPegawai, selectedFile })

    const postt = req.body;

    const newPostTransaksi = new PostTransaksi({ ...postt, creator: req.userId, createdAt: new Date().toISOString() });

    try {
        await newPostTransaksi.save();
        res.status(201).json(newPostTransaksi);
        console.log(newPostTransaksi)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePostt = async (req, res) => {
    const { id } = req.params;
    const { namaPegawai, creator, jumlahPelayanan, kurunWaktu } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPostt = { creator, namaPegawai, jumlahPelayanan, kurunWaktu, _id: id };

    await PostTransaksi.findByIdAndUpdate(id, updatedPostt, { new: true });

    res.json(updatedPostt);
}

export const deletePostt = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostTransaksi.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;