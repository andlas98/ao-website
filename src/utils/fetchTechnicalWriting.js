export async function fetchTechnicalWriting() {
    const response = await fetch("/api/technicalWritings");
    const data = await response.json();
    return data;
}