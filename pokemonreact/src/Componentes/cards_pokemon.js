import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position: 'relative',
    padding: '30px',
    borderwidth:'10px',
    float: 'left',
  },
  media: {
    height: 140,
  },
});


const MoreDeets = ({pokemon_todos}) => {
    
    const classes = useStyles();
    const render_pokemon = (card, index) =>{
        return(
        <Card className={classes.root}  key={index}>
        
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={card.foto}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {card.nome}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               R$ {Math.random()* 10}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Adicinar ao Carrinho
            </Button>
          </CardActions>
        </Card>)
    }
    


    return <div className="grid">{pokemon_todos.map(render_pokemon)}</div>;
  }


export default MoreDeets;