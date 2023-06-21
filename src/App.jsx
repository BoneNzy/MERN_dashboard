import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme.jsx";
import { useMemo } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./scenes/layout/layout.jsx";
import Dashboard from "./scenes/dashboard/dashboard.jsx";

function App() {
	const mode = useSelector((state) => state.global.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<>
			<div className="app">
				<BrowserRouter>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Routes>
							<Route element={<Layout />}>
								<Route
									path="/"
									element={<Navigate to="/dashboard" replace />}
								/>
								<Route path="/dashboard" element={<Dashboard />} />
							</Route>
						</Routes>
					</ThemeProvider>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
