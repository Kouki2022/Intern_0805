// LinkList.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LinkList.css';
import './CommonStyles.css';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Snackbar,
  Box,
  Divider
} from '@mui/material';
import {
  ContentCopy as ContentCopyIcon,
  Send as SendIcon,
 Home as HomeIcon
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useAuth } from './AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const LinkList = () => {
    const navigate = useNavigate();
    const [linkCopied, setLinkCopied] = useState(false);
    const location = useLocation();
    const { selectedRecipients, amount, message } = location.state || {};
    const { logout } = useAuth();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [currentDateTime, setCurrentDateTime] = useState('');
  
    useEffect(() => {
      const now = new Date();
      setCurrentDateTime(now.toISOString().replace(/[:.]/g, ''));
    }, []);
  
    const generateLink = (userId) => {
      return `http://localhost:3000/transition/${currentDateTime}/${userId}`;
    };
  
    const handleCopyLink = (link) => {
      navigator.clipboard.writeText(link);
      setSnackbarMessage('リンクをコピーしました！');
      setSnackbarOpen(true);
    };
  
    const handleForward = (link) => {
      console.log(`リンクを転送する: ${link}`);
      setSnackbarMessage('リンクを転送しました！');
      setSnackbarOpen(true);
    };
  
    return (
      <ThemeProvider theme={theme}> 
        <div className="common-header">
          <h1>Top画面</h1>
          <button className="logout-button" onClick={logout}>
            ログアウト
          </button>
        </div>
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              fontSize: {
                xs: '1.5rem',
                sm: '2rem',
                md: '2.5rem'
              },
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            請求リンクが作成されました
          </Typography>
          {selectedRecipients && selectedRecipients.map((recipient, index) => (
            <Card key={index} sx={{ mb: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  宛名: {recipient.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {generateLink(recipient.id)}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button
                    variant="outlined"
                    startIcon={<ContentCopyIcon />}
                    onClick={() => handleCopyLink(generateLink(recipient.id))}
                  >
                    コピー
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<SendIcon />}
                    onClick={() => handleForward(generateLink(recipient.id))}
                    sx={{ ml: 2 }}
                  >
                    転送
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              className="action-button"
              onClick={() => navigate('/')}
              variant="contained"
              color="secondary"
              startIcon={<HomeIcon />}
              size="large"
            >
              トップ画面に戻る
            </Button>
          </Box>
        </Container>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={() => setSnackbarOpen(false)}
          message={snackbarMessage}
        />
      </ThemeProvider>
    );
  };
  
  export default LinkList;