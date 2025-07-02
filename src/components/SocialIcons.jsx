import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';

const SocialIcons = ({ siteSettings }) => {
  if (!siteSettings || (!siteSettings.instagram_url && !siteSettings.facebook_url && !siteSettings.tiktok_url && !siteSettings.youtube_url)) {
    return null;
  }

  return (
    <div className="flex justify-center space-x-6 mb-4">
      {siteSettings.instagram_url && (
        <a href={siteSettings.instagram_url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-brand-primary transition-all duration-300 transform hover:-translate-y-1">
          <FaInstagram size={28} />
        </a>
      )}

      {siteSettings.facebook_url && (
        <a href={siteSettings.facebook_url} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-brand-primary transition-all duration-300 transform hover:-translate-y-1">
          <FaFacebook size={28} />
        </a>
      )}

      {siteSettings.tiktok_url && (
        <a href={siteSettings.tiktok_url} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-brand-primary transition-all duration-300 transform hover:-translate-y-1">
          <FaTiktok size={28} />
        </a>
      )}

      {siteSettings.youtube_url && (
        <a href={siteSettings.youtube_url} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-brand-primary transition-all duration-300 transform hover:-translate-y-1">
          <FaYoutube size={28} />
        </a>
      )}
    </div>
  );
};

export default SocialIcons;