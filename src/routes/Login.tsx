import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { ROUTE } from "../constants/route";

export default function Login() {
  const history = useHistory();
  const handleSignupClick = () => {
    history.push(ROUTE.SIGNUP);
  };

  return (
    <Grid marginX={3}>
      <Grid container justifyContent="center" mt={5}>
        <Grid item textAlign="center" xs={12}>
          <Box
            component="img"
            sx={{
              height: 200,
              width: 200,
              borderRadius: "50%",
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </Grid>
        <Grid item textAlign="center" xs={12} mt={1}>
          먹쉐어
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="start"
        marginTop={3}
        sx={{
          display: "block",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          로그인
        </Typography>
        <Typography variant="body2" color="gray">
          로그인을 해 주세요
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Box component="form" width="100%" textAlign="center" mt={3}>
          <Grid xs={12} item={true}>
            <TextField
              required
              id="outlined-disabled"
              label="이메일"
              fullWidth
            />
          </Grid>
          <Grid xs={12} mt={2} item={true}>
            <TextField
              required
              id="outlined-disabled"
              label="비밀번호"
              fullWidth
              type="password"
            />
          </Grid>
          <Grid xs={12} mt={3} item={true}>
            <Button variant="contained">로그인</Button>
          </Grid>
        </Box>
      </Grid>
      <Grid container mt={3}>
        <Grid xs={6} item={true}>
          <Typography variant="body2" color="gray">
            비밀번호를 잊으셨나요?
          </Typography>
        </Grid>
        <Grid xs={6} item={true} display="flex" justifyContent="end">
          <Typography
            variant="body2"
            color="primary"
            fontWeight="bold"
            onClick={handleSignupClick}
          >
            회원가입
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
