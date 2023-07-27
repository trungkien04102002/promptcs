"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TagPromptCard from "./TagPromptCard";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const tagNameArr = [
    "email marketing",
    "launch product",
    "marketing",
    "seo",
    "trung kien",
    "dep trai",
  ];
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikedClick = () => {
    console.log("Is clicking!");
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            K
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ha Trung Kien"
        subheader="September 02, 2023"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography paragraph>MARKETING</Typography>
        <Typography variant="body2" color="text.secondary">
          Viết email bán hàng (Sales Emails)
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          <br></br>
          Viết email bán hàng (Sales Emails)
        </Typography> */}
        <br></br>
        <div className="flex flex-wrap gap-1">
          {/* <TagPromptCard tagName = "email marketing"></TagPromptCard> */}
          {tagNameArr.map((tagName, idx) => (
            <TagPromptCard key={idx} tagName={tagName} />
          ))}
        </div>
      </CardContent>

      <CardActions disableSpacing className="flex justify-center">
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="add to favorites" onClick={handleLikedClick}>
            <FavoriteIcon />
          </IconButton>
          <span>50</span>
        </div>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="visitor">
            <RemoveRedEyeIcon />
          </IconButton>
          <span></span>
        </div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className="font-medium">
            Prompt
          </Typography>
          <Typography paragraph variant="body2" color="text.secondary">
            Write an email introducing our new product [product name] to a
            potential customer, highlighting its key features and benefits
          </Typography>
          <Typography paragraph variant="body2" color="text.secondary">
            Viết một email giới thiệu sản phẩm mới [tên sản phẩm] của chúng tôi
            cho một khách hàng tiềm năng, nhấn mạnh các tính năng và lợi ích
            chính của nó.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}
