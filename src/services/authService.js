const API_URL = 'http://localhost:3000/api'; // Nota: usualmente los servidores locales corren en http, no https, a menos que configures certificados SSL.

export const servicioLogin = async (username, password) => { // Cambiado email por username
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    return { ok: response.ok, data };
};

export const servicioRegistro = async (email, username, password) => {
    const response = await fetch(`${API_URL}/registrar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Corregido 'application'
        body: JSON.stringify({ email, username, password }),
    });

    const data = await response.json();
    return { ok: response.ok, data }; 
};