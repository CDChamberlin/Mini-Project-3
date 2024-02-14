"use client";
import { useCart } from "@/context/CartContext";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function SmallCard({ name, image, description, price }) {
  const userCart = useCart()

  return (
    <Card sx={{ maxWidth: 400, marginY: 2}}>
      <CardMedia
        component="img"
        alt={name}
        src={image}
        style={{ objectFit: "contain", height: "150px", width: "100%", maxWidth: "100%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">$ {price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => userCart.addToCart(name)}>
          Add to Cart
        </Button>
        <Button size="small">Product Page</Button>
      </CardActions>
    </Card>
  );
}
