import SelfAvatar from '../components/self-avatar';
export default function Page() {
  return (
    <main className="min-h-screen">
        <SelfAvatar className='size-48' />
        <div about='scroller' className='h-[2000px] w-full'></div>
      </main>
  );
}
