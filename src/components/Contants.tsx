import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

const Contants = () => { 
    return (
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={6}>
                <Item>
                    <Typography variant="h4" gutterBottom >
                        Generate Cover Letter
                    </Typography>
                </Item>
               
                </Grid>
                <Grid xs={6}>
                    <Item>
                        <Button variant="outlined">Generate</Button>
                    </Item>
                </Grid>

            </Grid>

                 
            </Box>
    )
}

export default Contants;