import React from 'react';
import { MessageSquare, UserPlus } from 'lucide-react';
import characterImg from '../assets/jenni_character.jpg';

export default function FloatingProfile({ onMessageClick }) {
  return (
    <aside className="floating-profile-card">
      <div className="profile-status-row">
        <span className="open-to-work-pill">
          <span className="green-pulse-dot"></span>
          <span>Open to Work</span>
        </span>
      </div>

      <div className="profile-avatar-box">
        <img
          src={characterImg}
          alt="Jenni Mankar"
          className="profile-real-img"
        />
      </div>

      <h3 className="profile-name">Jenni Mankar</h3>
      <p className="profile-role">Product Designer</p>
      <p className="profile-bio-snippet">I design digital rooms that people remember.</p>

      <div className="profile-actions-row">
        <button onClick={onMessageClick} className="profile-message-btn">
          <MessageSquare size={13} />
          <span>Message</span>
        </button>
        <button
          onClick={() => alert("Followed Jenni! You'll receive updates on new case studies.")}
          className="profile-follow-btn"
        >
          <UserPlus size={13} />
          <span>Follow</span>
        </button>
      </div>
    </aside>
  );
}
