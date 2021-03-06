import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { deleteFaves } from "../actions/DeleteFavesAction";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },

  actions: {
    margin: "auto"
  }
}));

function DashBoardSongCards(props) {
  const classes = useStyles();
  const song_id = props.data.id;

  const handleDelete = e => {
    e.preventDefault();
    props.deleteFaves(song_id);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={props.data.album_art}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.artist} - {props.data.title}
          </Typography>
          <Typography>Album: {props.data.album}</Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button size="small" color="primary" onClick={handleDelete}>
            Remove from favorites
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { deleteFaves })(DashBoardSongCards);
