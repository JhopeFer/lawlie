'use client';

import { useState } from 'react';

// Data channel tiruan. Di aplikasi nyata, ini akan berasal dari sebuah API.
const channelData = [
  {
    id: 'jfKfPfyJRdk', // ID Video YouTube
    name: 'Berita Terkini',
    title: 'LIVE: Perkembangan Berita Nasional 24/7',
    description: 'Liputan langsung berita terkini dari seluruh Indonesia. Tetap terinformasi dengan laporan mendalam dan analisis dari para ahli.',
  },
  {
    id: '36YnV9STBqU',
    name: 'E-Sports Arena',
    title: 'Final Turnamen Valorant: Tim Naga vs Tim Garuda',
    description: 'Saksikan pertarungan sengit di babak final kejuaraan Valorant nasional. Siapakah yang akan menjadi juara?',
  },
  {
    id: '4xDzrJKXOOY',
    name: 'Musik Santai',
    title: 'Lofi Hip Hop Radio - Beats to Relax/Study to',
    description: 'Temani waktu santai atau fokus belajar Anda dengan alunan musik lofi hip hop tanpa henti.',
  },
  {
    id: 'MW_N4_q1peo',
    name: 'Alam Liar',
    title: 'Dokumenter Kehidupan Laut: Misteri Palung Mariana',
    description: 'Menjelajahi keindahan dan misteri kehidupan di bagian terdalam lautan. Sebuah perjalanan visual yang menakjubkan.',
  },
];

export default function HomePage() {
  const [activeChannel, setActiveChannel] = useState(channelData[0]);

  return (
    <div className="container">
      <aside className="sidebar">
        <header className="sidebar-header">
          Lawlie
        </header>
        <ul className="channel-list">
          {channelData.map((channel) => (
            <li
              key={channel.id}
              className={`channel-item ${activeChannel.id === channel.id ? 'active' : ''}`}
              onClick={() => setActiveChannel(channel)}
            >
              {channel.name}
            </li>
          ))}
        </ul>
      </aside>

      <main className="main-content">
        {/* Header baru di kanan atas */}
        <header className="main-header">
          <div className="user-profile">
            {/* Placeholder untuk ikon notifikasi atau lainnya di masa depan */}
            <div className="user-avatar" title="Profil Pengguna"></div>
          </div>
        </header>

        {/* Wrapper untuk area konten yang bisa di-scroll */}
        <div className="stream-wrapper">
          {/* Kontainer untuk mengecilkan dan memusatkan video */}
          <div className="stream-content">
            <div className="video-player-wrapper">
              <iframe
                className="video-player"
                src={`https://www.youtube.com/embed/${activeChannel.id}?autoplay=1&mute=1&controls=0`}
                title={activeChannel.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h1 className="video-title">{activeChannel.title}</h1>
              <p className="video-description">{activeChannel.description}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
