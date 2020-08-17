import React, { Component } from 'react'
import CoffeeCard from './CoffeeCard'
import { Grid } from '@material-ui/core'
import phonesList from './constants'

export default class Content extends Component {
    render() {

        const getPhoneList = (phonesObj) => {
            return (
                <Grid item xs={12} sm={4} >
                <CoffeeCard { ...phonesObj } />
                </Grid>
            )
        }
    

        return (
            <Grid spacing={4} container>
                
                { phonesList.map(phonesObj => getPhoneList(phonesObj)) }
                
            </Grid>
            
        )
    }
}
