import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSubmit = async () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password) {
            setError('Please fill all fields!');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5001/admin/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();
            console.log(result);
            if (!response.ok) {
                setError(result.error || 'Login failed');
                return;
            }
            localStorage.setItem("token", result.token);

            navigate('/CRUD')

            // Login success - store token and navigate

        } catch (err) {
            console.error("Error during login:", err);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2,
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h5">Login to Dashboard </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        mt: 3,
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <TextField inputRef={emailRef} label="Email" name="email" required />
                    <TextField
                        inputRef={passwordRef}
                        type="password"
                        label="Password"
                        name="password"
                        required
                    />
                    <Button onClick={onSubmit} variant="contained">
                        Login
                    </Button>
                    {error && (
                        <Typography color="error" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}
                </Box>
            </Box>
        </Container>
    );
};
