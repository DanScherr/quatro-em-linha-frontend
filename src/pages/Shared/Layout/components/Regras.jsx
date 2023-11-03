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
            height: '605px', m: 2, 
            backgroundColor: 'background.card',
            borderRadius: 5,
            mt: 11.6,
        }}>
            <CardContent>
                <Typography variant="span" sx={{
                    textAlign: 'center', fontSize: '25px',
                    color: 'primary.lightMain', fontWeight: '700'
                }}>
                    Ads
                </Typography>

                <Card sx={{
                    height: '100%', m: 2, display: 'block', 
                    borderRadius: 5, mt: 4
                }}>
                    <CardContent sx={{p: 2}}>
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
