import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <UserProfile name="Abdelmounaim" age={20} bio="Web Developer" />
      <MainContent />
      <Counter/>
      <Footer />
    </>
  );
}

export default App;
