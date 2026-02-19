document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("user-container");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Network response was not OK");
        }

        const users = await response.json();

        container.innerHTML = "";

        users.forEach(user => {
            const div = document.createElement("div");
            div.className = "user-card";

            div.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        console.error(error);
        container.innerHTML = "<p class='error'>Error loading users.</p>";
    }
});
