import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
