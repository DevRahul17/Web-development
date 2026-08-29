//Problem 12
function setAuthToken(token) {
    // Token will expire after 1 hour
    const expirationTime = Date.now() + 60 * 60 * 1000;

    const authData = {
        token: token,
        expiresAt: expirationTime
    };

    localStorage.setItem("authToken", JSON.stringify(authData));
}

// Example
setAuthToken("abc123xyz");