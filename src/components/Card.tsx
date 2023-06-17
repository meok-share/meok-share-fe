import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface CardProps {
  title?: string;
  subheader?: string;
  image?: string;
  content?: string;
  userImage?: string;
}

export default function RecipeReviewCard({
  title,
  subheader,
  image,
  content,
  userImage,
}: CardProps) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={userImage} />}
        title={title}
        subheader={subheader}
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ width: "100%" }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
