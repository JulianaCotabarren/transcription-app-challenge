import TranscriptionList from './TranscriptionList'
import AudioPlayer from './AudioPlayer'
import Footer from './Footer'

export default function HomePage (): JSX.Element {
  return (
    <main>
      <TranscriptionList />
      <AudioPlayer />
      <Footer />
    </main>
  )
}
