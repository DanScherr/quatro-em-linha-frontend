import { Card, List, Typography } from "@mui/material";

export default function Sobre(  ) {
    
    return (
        <Card sx={{
            height: '98%', m: 2, 
            backgroundColor: 'background.card',
            borderRadius: 5,
            p: 2,
        }}>
            <List
                sx={{
                    width: '100%',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: '100%',
                    '& ul': { padding: 0 },
                    px: 4
                }}
            >
                {/* Intro */}
                <Typography sx={{fontSize: '25px', fontWeight: '800', textAlign: 'justify', color: 'primary.lightestMain'}}>
                    {'Projeto Universitário para Turma de Engenharia de Software 3: Jogo "Quatro em Linha" Online'}
                </Typography>
                <Typography sx={{fontSize: '20px', fontWeight: '600', mt: 2, color: 'primary.lightestMain'}}>
                    {'Objetivo:'}
                </Typography>
                <Typography sx={{fontSize: '16px', fontWeight: '500', mt: 1, textAlign: 'justify', color: 'font.main'}}>
                    {'Desenvolver um jogo online "Quatro em Linha" baseado na web que permita a dois jogadores jogarem simultaneamente.'}
                </Typography>

                {/* Caracteristicas principais */}
                <Typography sx={{fontSize: '25px', fontWeight: '800', textAlign: 'justify', mt: 5, color: 'primary.lightestMain'}}>
                    {'Componentes e Características Principais:'}
                </Typography>
                <Typography sx={{fontSize: '20px', fontWeight: '600', mt: 2, color: 'primary.lightestMain'}}>
                    {'Frontend:'}
                </Typography>
                <Typography sx={{fontSize: '16px', fontWeight: '500', mt: 1, textAlign: 'justify', color: 'font.main'}}>
                    {'Interface de usuário limpa e intuitiva com botões, tabuleiro do jogo, indicadores de jogadores e status do jogo.'}
                </Typography>
                <Typography sx={{fontSize: '20px', fontWeight: '600', mt: 2, color: 'primary.lightestMain'}}>
                    {'Comunicação em Tempo Real:'}
                </Typography>
                <Typography sx={{fontSize: '16px', fontWeight: '500', mt: 1, textAlign: 'justify', color: 'font.main'}}>
                    {'Use WebSockets ou tecnologia similar para permitir atualizações em tempo real entre dois jogadores. Bibliotecas como Socket.io podem ser úteis.'}
                </Typography>
                <Typography sx={{fontSize: '20px', fontWeight: '600', mt: 2, color: 'primary.lightestMain'}}>
                    {'Banco de dados:'}
                </Typography>
                <Typography sx={{fontSize: '16px', fontWeight: '500', mt: 1, textAlign: 'justify', color: 'font.main'}}>
                    {'Criar ao mínimo 2 tabelas.'}
                </Typography>
                <Typography sx={{fontSize: '20px', fontWeight: '600', mt: 2, color: 'primary.lightestMain'}}>
                    {'Rede:'}
                </Typography>
                <Typography sx={{fontSize: '16px', fontWeight: '500', mt: 1, textAlign: 'justify', color: 'font.main'}}>
                    {'Gerenciar sessões de jogadores garantindo que permaneçam conectados durante o jogo.'}
                </Typography>
                <Typography sx={{fontSize: '20px', fontWeight: '600', mt: 2, color: 'primary.lightestMain'}}>
                    {'Segurança:'}
                </Typography>
                <Typography sx={{fontSize: '16px', fontWeight: '500', mt: 1, textAlign: 'justify', color: 'font.main'}}>
                    {'Autenticação de Usuário: Sistema seguro de registro e login do usuário.'}
                </Typography>
            </List>
        </Card>
    )
}