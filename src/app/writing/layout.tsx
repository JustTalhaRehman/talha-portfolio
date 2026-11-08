import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RequestCvModal } from '@/components/RequestCvModal';
import './writing.css';

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return <><a href="#main-content" className="skip-link">Skip to content</a><Navbar /><main id="main-content" className="page-wrap writing-wrap" tabIndex={-1}>{children}</main><Footer /><RequestCvModal /></>;
}
