export function saveBuild(buildData) {
    localStorage.clear()
    localStorage.setItem('build_data', JSON.stringify(buildData))
}