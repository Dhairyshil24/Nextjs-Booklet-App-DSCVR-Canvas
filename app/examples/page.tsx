import Card from '../../components/Card';

export default function Examples() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card
        title="What Can You Build with DSCVR Canvas?"
        content={`
          The possibilities are vast:
          Games, Utility apps, DeFi, Blinks and a lot more. 
          
          Whether simple or complex app, 
          Canvas makes distribution within DSCVR easy.
          Did I remember to mention - its FREE? - 
          Yeah 100% FREE exposure for your App/dApp at lunch.
        `}
        nextLink="/build-dscvr-canvas"
        backLink="/benefits"
      />
    </main>
  );
}