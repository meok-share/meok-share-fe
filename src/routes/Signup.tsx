import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export default function SignUp() {
  return (
    <Grid marginX={3} marginTop={5}>
      <Grid>
        <Typography variant="h5" fontWeight="bold">
          회원가입
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Box component="form" width="100%" textAlign="center" mt={3}>
          <Grid xs={12}>
            <TextField
              required
              id="outlined-disabled"
              label="이메일"
              fullWidth
            />
          </Grid>
          <Grid xs={12} mt={2}>
            <TextField
              required
              id="outlined-disabled"
              label="비밀번호"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid xs={12} mt={3}>
            <Button variant="contained">회원가입</Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
