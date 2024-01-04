import { Container, Typography } from "@mui/material";

export function NotFoundPage() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" sx={{ mt: 3 }}>
        Страница не найдена
      </Typography>
    </Container>
  );
}
