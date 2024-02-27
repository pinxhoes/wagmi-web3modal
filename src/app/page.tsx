import dynamic from "next/dynamic";

const ConnectButtonNoSSR = dynamic(
  () => import('@/components/WalletButton'),
  { ssr: false }
);

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col px-20 pt-20" style={{ background: 'var(--gradient)' }}>
      <div>
        <h1>Welcome to Our DApp</h1>
        <ConnectButtonNoSSR />

      </div>
    </main >

  );


}
