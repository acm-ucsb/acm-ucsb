import { Typography } from "@mui/material";

const AboutBlurb = () => {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            marginBottom: "48px",
            color: "black",
          }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="h6"
          maxWidth="70%"
          sx={{ color: "gray", fontWeight: "normal" }}
          align="center"
        >
          ACM at UCSB is a student-run organization that aims to support
          students interested in Computer Science by fostering a community of
          individuals who seek to learn from each other. Specifically, we create
          a place for students to prepare for a career in CS through hands-on
          experience developing real-world projects; gain exposure to a wide
          range of career paths within technology; network with faculty,
          graduate students, and professionals; pursue competitive programming
          opportunities; and ultimately have fun following their passion.
        </Typography>
        <br />
      </div>
    </section>
  );
};

export default AboutBlurb;
