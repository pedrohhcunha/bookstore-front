import React from 'react';
import Box from '@mui/material/Box';
import { Header } from "./components/Header";
import { Books } from "./pages/Books";

export function App() {
  return (
    <>
      <Box sx={{
        flexGrow: 1,
        minHeight: '100vh',
      }}>
        <Header />
        <Books />
      </Box>
    </>
  );
}
