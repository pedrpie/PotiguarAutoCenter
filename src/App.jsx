import Topbar from './components/Topbar/Topbar';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import Simulator from './components/Simulator/Simulator';
import Units from './components/Units/Units';
import MobileBar from './components/MobileBar/MobileBar';
import Footer from './components/Footer/Footer';
import CityModal from './components/CityModal/CityModal';
import { useContactModal } from './hooks/useContactModal';
import { buildContactMessage, openWhatsApp } from './utils/whatsapp';

export default function App() {
  const { isOpen, product, open, close } = useContactModal();

  const handleSelectUnit = (unit) => {
    openWhatsApp(unit.phone, buildContactMessage({ ...product, city: unit.city }));
    close();
  };

  return (
    <>
      <Topbar />
      <Header onContact={open} />

      <main>
        <Hero onContact={open} />
        <Offers onContact={open} />
        <Services />
        <Reviews />
        <Simulator />
        <Units />
      </main>

      <MobileBar />
      <Footer />

      <CityModal
        isOpen={isOpen}
        product={product}
        onClose={close}
        onSelectUnit={handleSelectUnit}
      />
    </>
  );
}
