import { PaginatedGallery } from '../components';

export default function PaginatedGalleryPage() {
  return (
    <main className="settings-page">
      <img
        alt="Password Strength Checker — Paginated Gallery demo"
        className="size-full object-cover"
        style={{ width: 500 }}
        src="/gifs/react-coding-problem-35.gif"
      />
      <h2>Paginated Gallery</h2>
      <PaginatedGallery />
    </main>
  );
}
