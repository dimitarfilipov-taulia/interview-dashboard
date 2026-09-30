import { RandomQuoteGenerator } from '../components';

export default function QuoteGenerator() {
  return (
    <main className="settings-page">
      <img
        alt="Password Strength Checker — Quote Generator demo"
        className="size-full object-cover"
        style={{ width: 500 }}
        src="/gifs/react-coding-problem-47.gif"
      />
      <h2>Random Quote Generator</h2>
      <RandomQuoteGenerator />
    </main>
  );
}
