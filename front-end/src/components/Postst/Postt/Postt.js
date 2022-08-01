import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardActions, CardContent, CardMedia, Button, Typography, Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';


import useStyles from '../../Postsp/Postp/styles';
//import { deletePostp } from '../../../actions/postsp';
import { deletePostt } from '../../../actions/postst';

const Postt = ({ postt, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem('profile'));

  //const openPost = () => history.push(`/postsp/${postp._id}`);


  return (
    <TableBody>
      <TableRow key={setCurrentId}>
        <TableCell align="right">{postt.namaPegawai}</TableCell>
        <TableCell align="right">{postt.jumlahPelayanan}</TableCell>
        <TableCell align="right">RP. 10.000</TableCell>
        <TableCell align="right">Rp. {postt.jumlahPelayanan * 10000}</TableCell>
        <TableCell align="right">{postt.kurunWaktu} Hari</TableCell>
        <TableCell align="right">{postt.name}</TableCell>
        <CardActions className={classes.cardActions} >
          {(user?.result?._id === "62729e1306510726d49b02a2") && (
            <Button size="small" color="primary" disabled={!user?.result} onClick={() => setCurrentId(postt._id)}>
              <EditIcon fontSize="small" />
              Edit
            </Button>
          )}
          {console.log(user?.result?._id)}
          {(user?.result?._id === "62729e1306510726d49b02a2") && (
            <Button size="small" color="secondary" disabled={!user?.result} onClick={() => dispatch(deletePostt(postt._id))}>
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          )}
        </CardActions>
      </TableRow>
    </TableBody >
  )
}

export default Postt;