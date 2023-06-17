import { Box, Button, Grid, TextField } from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

export default function Edit() {
  return (
    <Grid marginX={3}>
      <Box component="form" width="100%" textAlign="center" mt={3}>
        <Grid container justifyContent="center" style={{ gap: "15px" }}>
          <Grid xs={12} item={true}>
            <TextField required label="제목" fullWidth />
          </Grid>
          <Grid container columnSpacing={2}>
            <Grid xs={8} item={true}>
              <TextField required label="장소" fullWidth type="password" />
            </Grid>
            <Grid xs={4} item={true}>
              <Button
                variant="outlined"
                style={{ height: "100%", width: "100%" }}
              >
                장소검색
              </Button>
            </Grid>
          </Grid>
          <Grid xs={12} item={true}>
            <TextField
              required
              multiline
              fullWidth
              label="내용"
              rows={4}
              maxRows={4}
            />
          </Grid>
          <Grid xs={12} item={true}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["MobileTimePicker"]}>
                <MobileTimePicker defaultValue={dayjs()} label="시간 선택" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid xs={12} item={true}>
            <TextField
              required
              fullWidth
              label="최대 인원"
              inputProps={{ maxLength: 2 }}
            />
          </Grid>
          <Grid xs={12} item={true}>
            <Button variant="contained">파티 등록</Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
