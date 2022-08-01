import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FileBase from 'react-file-base64';

import useStyles from '../Formp/styles';
//import { createPostp, updatePostp } from '../../actions/postsp.js';
import { createPostt, updatePostt } from '../../actions/postst';

const useFormt = ({ currentId, setCurrentId }) => {
  const [posttData, setPosttData] = useState({ namaPegawai: '', jumlahPelayanan: '', kurunWaktu: '' });
  const postt = useSelector((state) => (currentId ? state.postst.find((message) => message._id === currentId) : null));

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (postt) setPosttData(postt);
  }, [postt]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePostt(currentId, { ...posttData, name: user?.result?.name }));
      history.push('/transaksi');
      clear();
    } else {
      dispatch(createPostt({ ...posttData, name: user?.result?.name }));
      history.push('/transaksi');
      clear();
    }
    console.log(posttData);
  };


  const clear = () => {
    setCurrentId(null);
    setPosttData({ namaPegawai: '', jumlahPelayanan: '', kurunWaktu: '' });
  }


  return (
    <Container component="main" maxWidth="xl" >

      {(user?.result?._id === "62729e1306510726d49b02a2") && (
        <Paper className={classes.Paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'> {currentId ? 'Ubah Data Transaksi' : 'Tambah Transaksi'} </Typography>
            <TextField name="namaPegawai" variant="outlined" label='Nama Pegawai' fullWidth value={posttData.namaPegawai} onChange={(e) => setPosttData({ ...posttData, namaPegawai: e.target.value })} />
            <TextField name="jumlahPelayanan" variant="outlined" label='Jumlah Pelayanan' fullWidth value={posttData.jumlahPelayanan} onChange={(e) => setPosttData({ ...posttData, jumlahPelayanan: e.target.value })} />
            <TextField name="kurunWaktu" variant="outlined" label='Kurun Waktu' fullWidth value={posttData.kurunWaktu} onChange={(e) => setPosttData({ ...posttData, kurunWaktu: e.target.value })} />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
          </form>
        </Paper>
      )}

    </Container>
  )
}

export default useFormt;