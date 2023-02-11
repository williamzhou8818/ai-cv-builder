import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import axios from "axios";

const Contants = () => {
  const [coverLetter, setCoverLetter] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [expericence, setExpericence] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function buildCVHandler() {
    if (jobDescription === "") {
      return;
    }
    setIsLoading(true);

    let prompt =
      "Write a short cover letter for the following job description: " +
      jobDescription +
      " for a candidate that has the following experiences: " +
      expericence;
    axios
      .post("https://openaioverview.azurewebsites.net/api/completionAPI", {
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 400,
        temperature: 0,
      })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
          setCoverLetter(response.data);
          setIsLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Grid container spacing={2} mt={2}>
      <Grid xs={6} item={true}>
        <Typography variant="h4" gutterBottom>
          Generate Cover Letter
        </Typography>
      </Grid>
      <Grid xs={6} item={true}>
        {!isLoading ? (
          <Button variant="outlined" onClick={buildCVHandler}>
            Generate
          </Button>
        ) : (
          <img
            src="./loading.gif"
            alt="loading..."
            style={{ width: "74px", height: "74px" }}
          />
        )}
      </Grid>
      {/* input field */}
      <Grid xs={6} item={true}>
        <p>Enter in the job description</p>

        <TextareaAutosize
          aria-label="Enter in the job description:"
          placeholder="Job description..."
          style={{ width: "100%", height: 145 }}
          minRows={3}
          maxRows={10}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </Grid>
      <Grid xs={6} item={true}>
        <p>Enter some experiences or skills you have</p>
        <TextareaAutosize
          aria-label="Enter some experiences or skills you have:"
          placeholder="experiences or skills..."
          style={{ width: "100%", height: 145 }}
          minRows={3}
          maxRows={10}
          value={expericence}
          onChange={(e) => setExpericence(e.target.value)}
        />
      </Grid>

      <Grid xs={12} item={true}>
        <p>You customized cover letter</p>
        <TextareaAutosize
          aria-label="You Customized cover letter"
          placeholder=""
          style={{ width: "100%", height: 300 }}
          minRows={3}
          maxRows={20}
          value={coverLetter}
        />
      </Grid>
    </Grid>
  );
};

export default Contants;
