import React, { useState } from 'react';
import { Grid, CircularProgress, TableCell, TableContainer, Grow, Paper, Table, TableHead, TableRow } from '@material-ui/core';
import { useSelector } from 'react-redux';

//import Postp from '../Postst/Postt/Postt';
import useStyles from '../Postsp/styles';
import Postt from '../Postst/Postt/Postt';

const Postst = ({ setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  const postst = useSelector((state) => state.postst);
  const classes = useStyles();

  return (
    !postst.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        <Grow in>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Nama Pegawai</TableCell>
                  <TableCell align="right">Jumlah Pelayanan</TableCell>
                  <TableCell align="right">Harga Pelayanan</TableCell>
                  <TableCell align="right">Total Pelayanan</TableCell>
                  <TableCell align="right">Kurun Waktu</TableCell>
                  <TableCell align="right">Create By</TableCell>
                  {(user?.result?._id === "62729e1306510726d49b02a2") && (
                    <TableCell align="right">Action</TableCell>
                  )}
                </TableRow>
              </TableHead>
              {postst.map((postt) => (
                <Postt postt={postt} setCurrentId={setCurrentId} />
              ))}
            </Table>
          </TableContainer>
        </Grow>
      </Grid>
    )
  )
}

export default Postst;