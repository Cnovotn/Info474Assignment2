import React, { Component, useState } from 'react'
import './style.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';

import {Button, Menu} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useFetch } from "../hooks/useFetch"
import { extent, max, min, bin } from "d3-array";
import { Axis, Orient } from "d3-axis-for-react";
import { scaleLinear } from "d3-scale";
import * as d3 from "d3";
import d3Tip from "d3-tip";


//   Scale for these values is still unknown
const yValues = {
    "acousticness" : {
        "name":"acousticness",
        "scale":100,
        "minVal":0.22,
        "maxVal":0.96,
        "description": "How acoustic the songs in year are on a scale of 0.0 to 1.0."
    },
    "danceability" : {
        "name":"danceability",
        "scale":100,
        "minVal":0.41,
        "maxVal":0.69,
        "description": "How suitable the songs in year are for dancing on a scale of 0.0 to 1.0."
    },
    "duration_ms" : {
        "name":"duration_ms",
        "scale":100,
        "minVal":157000,
        "maxVal":268000,
        "description": "Average time duration of songs in year in ms."
    },
    "energy" : {
        "name":"energy",
        "scale":100,
        "minVal":0.21,
        "maxVal":0.68,
        "description": "How energetic the songs in year are on a scale of 0.0 to 1.0."
    },
    "instrumentalness" : {
        "name":"instrumentalness",
        "scale":100,
        "minVal":0.02,
        "maxVal":0.58,
        "description": "Ratio of instrumental sounds on a scale of 0.0 to 1.0."
    },
    "liveness" : {
        "name":"liveness",
        "scale":100,
        "minVal":0.17,
        "maxVal":0.26,
        "description": "Audience presence on a scale of 0.0 to 1.0."
    },
    "speechiness" : {
        "name":"speechiness",
        "scale":100,
        "minVal":0.05,
        "maxVal":0.49,
        "description": "Spoken words ratio on a scale of 0.0 to 1.0."
    },
    "tempo" : {
        "name":"tempo",
        "scale":100,
        "minVal":101,
        "maxVal":124,
        "description": "Tempo of songs in year in BPM on a scale of 0.0 to 160."
    },
    "valence" : {
        "name":"valence",
        "scale":100,
        "minVal":0.38,
        "maxVal":0.66,
        "description": "Positivity of songs in year on a scale of 0.0 to 1.0."
    },
    "popularity" : {
        "name":"popularity",
        "scale":100,
        "minVal":0.14,
        "maxVal":65.3,
        "description": "Popularity of songs in year on a scale of 0.0 to 100.0."
    }
}

function ScatterPlot() {
    const dataByYearURL = "https://raw.githubusercontent.com/Info474Sp21/Info474Assignment3/main/data/data_by_year_o.csv"
    //state stuff
    const [data, loading] = useFetch(
        dataByYearURL
    );
    return (
        <div className="scatterplot">
            <h1 className="centered">React and D3 Interactive Scatter Plot Visualization #2</h1>
            <div className="filters">
                <div className="centered">

                </div>
            </div>

        </div>
    );
}
export default ScatterPlot;