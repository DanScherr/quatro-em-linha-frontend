//@ts-check
/** State */
import React, { useContext, useState } from 'react';
/** Navigate */
import { useNavigate } from 'react-router-dom';
/** MUI */
import { 
    AppBar, 
    Toolbar, 
    Container, 
    Typography, 
    Box, 
    Slide, 
    useScrollTrigger, 
    IconButton, 
    Menu, 
    MenuItem, 
    Tooltip, 
    Avatar,
    Button,
    Icon,
} from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';
import MenuIcon from '@mui/icons-material/Menu';
/** Assets */
import profileImg from './../../../../static/images/avatar/logo-profile-01.png'
import AuthContext from '../../../../context/AuthContext';
import icon from './../../../../static/images/icon/logo192.png'

export default function SharedLayoutHeader( ) {
    const {RealizaLogout} = useContext(AuthContext)

    /** Hide Bar when Scroll */
    const trigger = useScrollTrigger();

    /** Responsive Bar */
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    /** Navigate */
    const navigate = useNavigate();
    const navegarPagina = ((page) => {
        navigate(`/${page}`)
        if (page === '') window.location.reload();
    })

    /** Mockup */
    let paginas = [ 'jogue', 'sobre' ]
    let configuracao = [ 'logout' ]

    return(
        <>
            <Slide appear={false} direction='down' in={!trigger}>
                <AppBar sx={{color: 'primary.main', bgcolor: 'background.navBar'}}  >
                    <Container maxWidth="xl" >
                        <Toolbar disableGutters variant="dense">

                            {/** BIG SCREENS */}
                            {/** Logo */}
                            <Box sx={{display: { xs: 'none', md: 'flex' }, flexGrow: 1}}>
                                <Button onClick={() => navegarPagina('/')} >
                                    <Icon 
                                        sx={{ 
                                            display: { xs: 'none', md: 'flex'}, 
                                            mr: 1, fontSize: '30px',
                                            backgroundImage: `url(${icon})`,
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat'
                                        }} 
                                    />
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="a"
                                        href="/"
                                        sx={{
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                                        fontSize: '17px',
                                        fontWeight: '700',
                                        letterSpacing: '.2rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        }}
                                    >
                                        4em'
                                    </Typography>
                                </Button>
                            </Box>
                            {/** Paginas */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {paginas.map((page, index) => (
                                <Button
                                    key={`${page}`}
                                    onClick={() => navegarPagina(page==='jogue'? '' : page)}
                                    sx={{ 
                                        my: 'auto', color: 'primary.lightMain',  mr: 2,
                                        display: 'block', fontSize: '13px',
                                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                                        fontWeight: 700
                                    }}
                                >
                                    {`${page}`}
                                </Button>
                                ))}
                            </Box>

                            {/** SMALL SCREENS */}
                            {/** Menu */}
                            <Box sx={{ 
                                flexGrow: 2,
                                display: { xs: 'flex', md: 'none' },
                            }}>
                                <IconButton 
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                    
                                >
                                    <MenuIcon sx={{
                                        color: 'primary.lightestMain'
                                    }}/>
                                </IconButton>
                                <Menu
                                    id='menu-appbar'
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{ 
                                        display: {xs: 'block', md: 'none'}
                                    }}
                                >
                                    {paginas.map((page, index) => (
                                        <MenuItem key={`${page}`} onClick={() => console.log(`tela pequena pagina`)} sx={{
                                            color: 'primary.lightestMain',
                                        }}
                                        >
                                            <Typography textAlign="center">{`${page}`}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                                {/** Logo */}
                                <ExtensionIcon sx={{my: 'auto'}} />
                            </Box>

                            {/** BIG & SMALL SCREENS */}
                            {/** Avatar */}
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="User Options">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Avatar" src={profileImg} sx={{ width: 50, height: 50 }} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                    >
                                    {configuracao.map((setting) => (
                                        <MenuItem key={setting} onClick={() => {handleCloseUserMenu(); RealizaLogout(); window.location.reload();}} 
                                            sx={{
                                                color: 'font.emphasis',
                                            }}>
                                            <Typography textAlign="center" sx={{color: 'primary.lightestMain'}} >
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>
            <Box sx={{height: 50}} />
        </>
    )
}