import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { ROUTE } from "../constants/route";

export default function SignUp() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push(ROUTE.LOGIN);
  };

  return (
    <Grid marginX={3} marginTop={5}>
      <Grid>
        <Typography variant="h5" fontWeight="bold">
          회원가입
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
          <Grid xs={12} item={true}>
            <TextField
              required
              id="outlined-disabled"
              label="닉네임"
              fullWidth
            />
          </Grid>
          <Grid xs={12} mt={2} item={true}>
            <TextField
              required
              id="outlined-disabled"
              label="비밀번호"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid xs={12} mt={2} item={true} textAlign="start">
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="개인정보 동의?"
            />
          </Grid>
          <Grid xs={12} mt={2} item={true}>
            <Button variant="contained">회원가입</Button>
          </Grid>
        </Box>
      </Grid>
      <Grid container mt={3}>
        <Grid xs={12} item={true} display="flex" justifyContent="center">
          <Typography variant="body2" color="gray" mr={2}>
            이미 계정이 있으신가요?
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            fontWeight="bold"
            onClick={handleLoginClick}
          >
            로그인
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
