import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getArtworksByUser } from '../../lib/artworkAPI';
import ArtworkCard from '../../components/artwork/artwork-card';

export default function ArtworkManage() {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    if (!username) {
      return;
    }

    async function fetchArtworks() {
      try {
        const data = await getArtworksByUser(username);
        setArtworks(data.artworks);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArtworks();
  }, [username]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Manage Artworks | Art Gallery</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">Manage Your Artworks</h1>

      {artworks.length === 0 ? (
        <div>You have not uploaded any artworks yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
}
