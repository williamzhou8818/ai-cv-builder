import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Skeleton from "@mui/material/Skeleton";

import axios from "axios";

const ImageBuilder = () => {
  const [photoDesc, setPhotoDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [stockPhoto, setStockPhoto] = useState([
    {
      img: "./img-ai-ninjia-log.png",
      title: "Ai Ninjia",
    },
  ]);

  const buildImageHandler = () => {
    if (photoDesc === "") return;
    setIsLoading(true);
    let prompt = photoDesc;
    axios
      .post("https://openaioverview.azurewebsites.net/api/ImageAI", {
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      })
      .then(function (respose: any) {
        if (respose.status === 200) {
          console.log(respose.data);
          setStockPhoto([
            {
              img: respose.data,
              title: "",
            },
          ]);
        }
        setIsLoading(false);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const SaveImage = () => {
    console.log("save image");
  };

  return (
    <Grid container spacing={2} mt={2}>
      <Grid xs={6} item={true}>
        <Typography variant="h4" gutterBottom>
          Generate Your Stock Image
        </Typography>
      </Grid>
      <Grid xs={6} item={true}></Grid>
      {/* input field */}

      <Grid xs={6} item={true}>
        <p>Enter in the stock image that you would like: </p>

        <TextareaAutosize
          aria-label="Enter in the stock photo that you would like:"
          placeholder="..."
          style={{ width: "100%", height: 145 }}
          minRows={3}
          maxRows={10}
          value={photoDesc}
          onChange={(e) => setPhotoDesc(e.target.value)}
        />
        {!isLoading ? (
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={buildImageHandler}>
              Generate
            </Button>
            <Button variant="outlined" onClick={SaveImage}>
              Save Image
            </Button>
          </Stack>
        ) : (
          <img
            src="./loading.gif"
            alt="loading..."
            style={{ width: "74px", height: "74px" }}
          />
        )}
      </Grid>
      <Grid xs={6} item={true}>
        <p style={{ color: "gray" }}>Size: 1024 x 1024</p>

        {!isLoading ? (
          <ImageList sx={{ width: "100%" }} cols={1}>
            {stockPhoto.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Skeleton variant="rectangular" width={"100%"} height={430} />
        )}
      </Grid>
    </Grid>
  );
};

export default ImageBuilder;
