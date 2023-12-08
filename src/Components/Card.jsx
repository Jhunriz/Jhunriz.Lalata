import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SkillCards({ image, title, styledColor }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Card sx={{ maxWidth: 345 }} data-aos="fade-up">
      <CardActionArea>
        <div className={styledColor}>
          <CardMedia component="img" height="140" image={image} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
