import mongoose from "mongoose";

const posttSchema = mongoose.Schema({
    namaPegawai: String,
    name: String,
    creator: String,
    jumlahPelayanan: String,
    kurunWaktu: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

const PostTransaksi = mongoose.model('PostTransaksi', posttSchema);

export default PostTransaksi;