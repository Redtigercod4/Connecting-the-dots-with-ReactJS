export async function fetchData() {
    const response = await fetch("https://api.aetherion.workers.dev");

    if (!response.ok) {
        throw new Error("Error fetching data");
    }

    return response.json();
}