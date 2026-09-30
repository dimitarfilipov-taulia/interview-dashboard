import { PasswordStrengthChecker } from '../components';

export default function PasswordChecker() {
  return (
    <main className="settings-page">
      <img
        alt="Password Strength Checker — Real-Time Validation demo"
        className="size-full object-cover"
        style={{ width: 500 }}
        src="/gifs/react-coding-problem-40.gif"
      />
      <h2>Password Strength Checker</h2>
      <PasswordStrengthChecker />
    </main>
  );
}
