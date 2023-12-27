import { Grid } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const JumpingBlock = () => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0, y: 0 },
    to: { x: 100 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        y: 0,
      },
      to: {
        y: 100,
      },
    });
  };

  return (
    <animated.div
      onClick={handleClick}
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        cursor: 'pointer',
        ...springs,
      }}
    />
  );
};

const Hero = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <JumpingBlock />
      </Grid>
      <Grid item xs={3}>
        <JumpingBlock />
      </Grid>
      <Grid item xs={3}>
        <JumpingBlock />
      </Grid>
      <Grid item xs={3}>
        <JumpingBlock />
      </Grid>
    </Grid>
  );
};

export default Hero;
