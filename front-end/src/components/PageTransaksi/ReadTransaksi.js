import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, CardActions } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';

//import { getPostsp } from '../../actions/postsp';
import { getPostst } from '../../actions/postst';

//import Postsp from '../Postsp/Postsp';
import useStyles from '../PagePegawai/styles';
import Postst from '../Postst/Postst';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const useReadTransaksi = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  useEffect(() => {
    dispatch(getPostst());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <Grow in>

      <Container maxWidth="xl" >
        <Grid item md={2}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
              <CardActions className={classes.cardActions} >
                <Button component={Link} to="/transaksi" variant="outlined" size="small" color="secondary">
                  Kelola Data Transaksi
                </Button>
              </CardActions>
            </div>
          </AppBar>
        </Grid>
        <br />
        <Grid container justify="space-between" alignItems="stretch" spacing={3} >
          <Grid item xs={12} sm={6} md={12}>
            <Postst setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default useReadTransaksi;