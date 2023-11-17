import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import { useSpring, animated } from "react-spring";
import MultiplayerContext from "../../../../context/MultiplayerContext";
import AuthContext from "../../../../context/AuthContext";

const imagemPadrao =
  "./../../../../static/images/propaganda/propaganda-0.png";

export default function Regras() {
  const { ComecarStopWatch, cronometro } = useContext(MultiplayerContext);
  const { propagandaData } = useContext(AuthContext);
  const [propagandas, setPropagandas] = useState([]);
  const [index, setIndex] = useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await propagandaData();
        setPropagandas(data || []);
      } catch (error) {
        console.error("Erro ao carregar propagandas:", error);
        // Em caso de erro, definimos algumas imagens locais
        setPropagandas([
          { imagem_Anun: require("./../../../../static/images/propaganda/propaganda-0.png") },
          { imagem_Anun: require("./../../../../static/images/propaganda/propaganda-1.png") },
          // Adicione mais imagens locais conforme necessário
        ]);
      } finally {
        /*ComecarStopWatch(3);*/
      }
    };

    fetchData();
  }, [propagandaData, ComecarStopWatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % propagandas.length);
    }, 5000); // Troca de imagem a cada 5 segundos (ajuste conforme necessário)

    return () => clearInterval(interval);
  }, [propagandas]);

  return (
    <Card
      sx={{
        height: "515px",
        backgroundColor: "background.card",
        borderRadius: 5,
        mt: 6.6,
        position: "relative",
      }}
    >
      <CardContent
        sx={{
          p: 3,
          position: "absolute",
          top: "50%",
          msTransform: "translateY(-50%)",
          transform: "translateY(-50%)",
        }}
      >
        <Card
          sx={{
            height: "100%",
            m: 2,
            display: "block",
            borderRadius: 5,
            my: "auto",
          }}
        >
          <CardContent sx={{ p: 2, my: "auto" }}>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <animated.div
                className="carousel-inner"
                style={{ ...props, width: "100%" }}
              >
                {propagandas.map((item, i) => (
                  <animated.div
                    key={i}
                    className={i === index ? "carousel-item active" : "carousel-item"}
                    style={{ ...props }}
                  >
                    <img
                      src={item.imagem_Anun || imagemPadrao}
                      width="100%"
                      height="400px"
                      className="d-block w-100"
                      alt={`Imagem ${i}`}
                      style={{ opacity: props.opacity }}
                    />
                  </animated.div>
                ))}
              </animated.div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
