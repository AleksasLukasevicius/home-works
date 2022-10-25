const getRobots = async () => {
    try {
        const response = await fetch("https://magnetic-melon-yam.glitch.me");
        const robots = await response.json();

        console.info({ robots })

        return robots;

    } catch (error) {
        console.error(error)
    }
}

export { getRobots };