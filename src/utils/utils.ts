export function formatTime (totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = Math.floor(totalSeconds % 60)
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')
  return `${formattedMinutes}:${formattedSeconds}`
}
