import React, { useContext, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import p0 from './../../../../static/images/propaganda/propaganda-0.png'
import p1 from './../../../../static/images/propaganda/propaganda-1.png'
import p2 from './../../../../static/images/propaganda/propaganda-2.png'
import p3 from './../../../../static/images/propaganda/propaganda-3.png'
import MultiplayerContext from "../../../../context/MultiplayerContext";


export default function Regras(  ) {
    const {
        ComecarStopWatch, 
        cronometro
    } = useContext(MultiplayerContext)

    useEffect(() => {
        ComecarStopWatch(3);
    }, []);

    return (
        <Card sx={{
            height: '515px', 
            backgroundColor: 'background.card',
            borderRadius: 5,
            mt: 6.6,
            position: 'relative'
        }}>
            <CardContent sx={{p: 3,position: 'absolute', top: '50%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)'}}>
                <Card sx={{
                    height: '100%', 
                    m: 2, 
                    display: 'block', 
                    borderRadius: 5,
                    my: 'auto'
                }}>
                    <CardContent sx={{p: 2, my: 'auto'}}>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {
                                [p0,p1,p2,p3].map((item, index) => {
                                    return (
                                        <div className={cronometro===index ? `carousel-item active` : `carousel-item`}>
                                            <img src={item} className="d-block w-100" alt="..." style={{opacity: '80%'}} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    );
};
