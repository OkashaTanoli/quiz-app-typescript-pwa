import React from 'react'
import './quiz.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './responsive.css'



const ResultTable = (props: { checking: boolean[], show: boolean, length: number }) => {



    // console.log(props)
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div className={props.show ? 'result_table' : 'result_table2'} >
            <h1>Your Answers</h1>
            <hr />
            <Box className='points_div'>
                <Grid className='points_div_grid' container spacing={0}>
                    {
                        props.checking.map((val: boolean, ind: number) => {
                            return (
                                <Grid key={ind} className='point_grid' item lg={3} sm={4} xs={4}>
                                    <Item className={props.show ? 'point' : 'point2'} id={val ? 'green' : 'red'}>{ind + 1}</Item>
                                </Grid>
                            )
                        })

                    }
                    {
                        props.checking.length !== props.length ?

                                <Grid className='point_grid' item lg={3} sm={4} xs={4}>
                                    <Item className='point' id='point_grid_gray'>{props.checking.length + 1}</Item>
                                </Grid>
                        : false
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default ResultTable;