import Card from "../../../src/components/Card";
import { Button, Grid } from "@mui/material";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ROUTE } from "../../constants/route";

export default function Teams() {
  const history = useHistory();

  return (
    <Container>
      <div style={{ width: "100%", textAlign: "end" }}>
        <Button
          variant="outlined"
          sx={{ mb: 2 }}
          onClick={() => history.push(`${ROUTE.TEAM_EDIT}/0`)}
        >
          파티 생성
        </Button>
      </div>
      <Grid container rowSpacing={2}>
        <Grid item width="100%">
          <Card
            title="맥도날드 명동점"
            subheader="명동길 43"
            userImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            content="최고의 맛집"
          />
        </Grid>
        <Grid item width="100%">
          <Card
            title="맥도날드 명동점"
            subheader="명동길 43"
            userImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            content="최고의 맛집"
          />
        </Grid>
        <Grid item width="100%">
          <Card
            title="맥도날드 명동점"
            subheader="명동길 43"
            userImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            content="최고의 맛집"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 17px;
`;
