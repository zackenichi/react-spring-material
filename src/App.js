import './App.css';
import { Container, Grid, Typography } from '@mui/material';
import Hero from './components/Hero';

const styles = {
  h1: {
    fontWeight: 'bold',
    fontSize: '40px',
  },
};

const App = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" component="h1" align="center" sx={styles.h1}>
            Moving blocks
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Hero />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
