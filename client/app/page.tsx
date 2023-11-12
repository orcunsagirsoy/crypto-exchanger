import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import Image from 'next/image'
import { TransactionsProvider } from "../context/TransactionContext";
import Services from '@/components/Services';
import Transactions from '@/components/Transactions';
export default function Home() {
  return (
    <TransactionsProvider>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          {<Welcome />}
        </div>
        {/* <Services /> */}
        {/* <Transactions /> */}
        <Footer />
      </div>
    </TransactionsProvider>

  )
}
