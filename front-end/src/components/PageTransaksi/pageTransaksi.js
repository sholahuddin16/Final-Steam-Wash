import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, CardActions } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

//import { getPostsp } from '../../actions/postsp';
import { getPostst } from '../../actions/postst';

//import Postsp from '../Postsp/Postsp';
import Postst from '../Postst/Postst';
import Pagination from '../Pagination';
//import Formp from '../Formp/Formp';
import Formt from '../Formt/Formt';
import useStyles from '../PagePegawai/styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const usePageTranskasi = () => {
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

                <Grid container justify="space-between" alignItems="stretch" spacing={3} >
                    <Grid item xs={12} sm={6} md={8}>
                        <Postst setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Formt currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default usePageTranskasi;